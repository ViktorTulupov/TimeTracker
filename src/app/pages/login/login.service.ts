import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {
    private unAutorized = 'unautorized';
    private behaviorSubject: BehaviorSubject<string>;

    constructor(private http: HttpClient) {
        const loggedUser: User = JSON.parse(localStorage.getItem('loggedUser'));
        if (loggedUser) {
            this.behaviorSubject = new BehaviorSubject(loggedUser.name);
        } else {
            this.behaviorSubject = new BehaviorSubject(this.unAutorized);
        }
    }

    login(login: string, password: string): Observable<User> {
        return this.http.post<User>(`/users/login`, { login: login, password: password })
            .pipe(map(user => {
                if (user) {
                    localStorage.setItem('loggedUser', JSON.stringify(user));
                    this.behaviorSubject.next(user.name);
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('loggedUser');
        this.behaviorSubject.next(this.unAutorized);
    }

    get subject(): BehaviorSubject<any> {
        return this.behaviorSubject;
    }
}
