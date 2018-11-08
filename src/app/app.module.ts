import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.service';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import { JwtInterceptor } from './Interceptors/jwt.interceptor';
import { ApiInterceptor } from './Interceptors/api.interceptor';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './components/notification/notification.service';
import { LoggedUserComponent } from './components/logged-user/logged-user.component';
import { LoggedUserGuard } from './components/logged-user/logged-user.guard';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotificationComponent,
        LoggedUserComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        HomeModule
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
