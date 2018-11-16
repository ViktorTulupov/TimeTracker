import { InputDateComponent } from './calendar/input-date/input-date.component';
import { TaskIndicatorComponent } from './calendar/task-indicator/task-indicator.component';
import { TaskComponent } from './task-list/task/task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackerComponent } from './time-tracker.component';
import { CalendarHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarWeekComponent } from './calendar/calendar-week/calendar-week.component';
import { CalendrDayComponent } from './calendar/calendr-day/calendr-day.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TimeTrackerComponent,
    CalendarComponent,
    CalendarWeekComponent,
    CalendrDayComponent,
    CalendarHeaderComponent,
    TaskListComponent,
    TaskComponent,
    TaskIndicatorComponent,
    InputDateComponent
  ]
})
export class TimeTrackerModule { }
