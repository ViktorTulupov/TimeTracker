import { LoginService } from './../pages/login/login.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../components/notification/notification.service';
import { NotificalionType } from '../models/notification';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService: LoginService, private notificationService: NotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = `${err.status}: ${err.message}`;
            this.notificationService.message(error, NotificalionType.bad);
            return throwError(error);
        }));
    }
}
