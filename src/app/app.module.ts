import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './app.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
    AppGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
