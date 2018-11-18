import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, mergeMap, materialize, dematerialize, map } from 'rxjs/operators';
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
                const allTask: Task[] = JSON.parse(localStorage.getItem('tasks')) || [];
                const tasks = allTask.filter(task => {
                    const param = request.params.get('date');
                    const date = new Date(param);
                    const taskDate = new Date(task.date);
                    return taskDate.getDate() === date.getDate()
                        && taskDate.getMonth() === date.getMonth()
                        && taskDate.getFullYear() === date.getFullYear();
                });
                return of(new HttpResponse(new CustomResponse(200, 'OK', tasks)));
            }

            if (request.url === 'tasks' && request.method === 'POST') {
                let allTask: Task[] = JSON.parse(localStorage.getItem('tasks')) || [];
                let task: Task = request.body.task;
                task.id = allTask.length;
                allTask.push(task);
                localStorage.setItem('tasks', JSON.stringify(allTask));
                return of(new HttpResponse(new CustomResponse(200, 'OK', { id: task.id })));
            }

            if (request.url === 'tasks' && request.method === 'DELETE') {
                let allTask: Task[] = JSON.parse(localStorage.getItem('tasks')) || [];
                const dellTask = allTask.filter(task => {
                    const id = request.params.get('id');
                    return task.id.toString() === id;
                });
                const index = allTask.indexOf(dellTask[0]);
                allTask.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(allTask));
                return of(new HttpResponse(new CustomResponse(200, 'OK', null)));
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
