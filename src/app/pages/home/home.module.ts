import { CalendarHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarWeekComponent } from './calendar/calendar-week/calendar-week.component';
import { CalendrDayComponent } from './calendar/calendr-day/calendr-day.component';
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
    CalendarComponent,
    CalendarWeekComponent,
    CalendrDayComponent,
    CalendarHeaderComponent
  ]
})

export class HomeModule { }
