import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouingModule } from './home.routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouingModule
  ],
  declarations: [
    HomeComponent,
    CalendarComponent
  ]
})

export class HomeModule { }
