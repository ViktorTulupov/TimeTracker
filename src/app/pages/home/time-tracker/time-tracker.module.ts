import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackerComponent } from './time-tracker.component';
import { CalendarHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarWeekComponent } from './calendar/calendar-week/calendar-week.component';
import { CalendrDayComponent } from './calendar/calendr-day/calendr-day.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeTrackerComponent,
    CalendarComponent,
    CalendarWeekComponent,
    CalendrDayComponent,
    CalendarHeaderComponent,
    TaskListComponent
  ]
})
export class TimeTrackerModule { }
