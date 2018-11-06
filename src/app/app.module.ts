import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.service';
import { HomeComponent } from './pages/home/home.component';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import { JwtInterceptor } from './Interceptors/jwt.interceptor';
import { ApiInterceptor } from './Interceptors/api.interceptor';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { LoggedUserGuard } from './logged-user/logged-user.guard';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NotificationComponent,
        LoggedUserComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        LoggedUserGuard,
        LoginService,
        NotificationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
