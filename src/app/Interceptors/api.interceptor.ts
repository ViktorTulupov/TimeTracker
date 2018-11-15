import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, mergeMap, materialize, dematerialize, map, first } from 'rxjs/operators';
import { User } from '../models/user';
import { CustomResponse } from '../models/customResponse';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        return of(null).pipe(mergeMap(() => {
            if (request.url.endsWith('/users/login') && request.method === 'POST') {

                if (!users.length) {
                    this.loadUsers();
                }

                const filteredUsers = users.filter(user => {
                    return user.login === request.body.login && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    const user = filteredUsers[0];
                    const body = {
                        name: user.name,
                        token: user.token
                    };
                    return of(new HttpResponse(new CustomResponse(200, 'OK', body)));
                } else {
                    return throwError(new CustomResponse(400, 'Login or Password incorect', {}));
                }
            }

            if (request.url === 'tasks' && request.method === 'GET') {
                // last will delete
                const task = new Task(new Date(), 'TimeTracker', '0001', 5, 'Create project');
                const tasks = [task, task, task, task];

                // const allTask: Task[] = JSON.parse(localStorage.getItem('tasks')) || [];

                // const tasks = allTask.filter(task => {
                //     return task.date === request.body.data;
                // });

                return of(new HttpResponse(new CustomResponse(200, 'OK', tasks)));
            }

            return next.handle(request);

        }))

            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }

    loadUsers() {
        const url = 'shared/users.json';
        this.http.get(url)
            .pipe(map(data => {
                const users = data['users'];
                return users.map(function (user: any) {
                    return new User(user.login, user.password, user.token, user.name);
                });
            }))
            .subscribe(data => {
                localStorage.setItem('users', JSON.stringify(data));
            });
    }
}
