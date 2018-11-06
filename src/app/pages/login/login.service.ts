import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(login: string, password: string): Observable<any> {
        return this.http.post<any>(`/users/login`, { login: login, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('loggedUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('loggedUser');
    }
}
