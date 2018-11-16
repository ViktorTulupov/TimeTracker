import { Month } from './../../../../models/month.enum';
import { TaskListService } from '../time-tracker.service';
import { WeekDay } from './../../../../models/weekDay.enum';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarDay } from './../../../../models/calendarDay';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [TaskListService]
})
export class CalendarComponent implements OnInit {

  @Input() taskLoad;
  @Output() selectDateEvent = new EventEmitter<CalendarDay>();

  month: Month;
  year: number;
  weeks: CalendarDay[][];

  constructor(private taskService: TaskListService) { }

  ngOnInit() {
    if (!this.month || !this.year) {
      const now = new Date();
      this.month = now.getMonth();
      this.year = now.getFullYear();
    }
    this.generateMonthData();
  }

  daysInMonth(): number {
    const date = new Date(this.year, this.month + 1, 0);
    return date.getDate();
  }

  firstEmptyDays(): number {
    const date = new Date(this.year, this.month, 1);
    const day = date.getDay();
    switch (day) {
      case WeekDay.Mon:
        return 0;
      case WeekDay.Tue:
        return 1;
      case WeekDay.Wed:
        return 2;
      case WeekDay.Thu:
        return 3;
      case WeekDay.Fri:
        return 4;
      case WeekDay.Sat:
        return 5;
      case WeekDay.Sun:
        return 6;
    }
  }

  generateMonthData() {
    this.weeks = [];
    const daysInMonth = this.daysInMonth();
    const firstEmptyDays = this.firstEmptyDays();
    const monthWeeks = (daysInMonth + firstEmptyDays) > 35 ? 6 : 5;

    let monthDay = 1;

    for (let week = 0; week < monthWeeks; week++) {
      const days: CalendarDay[] = [];
      for (let day = 0; day < 7; day++) {
        if (monthDay <= firstEmptyDays || monthDay > (daysInMonth + firstEmptyDays)) {
          days.push(new CalendarDay(null, null));
        } else {
          const date = new Date(this.year, this.month, (monthDay - firstEmptyDays));
          days.push(new CalendarDay(date, []));
        }
        monthDay++;
      }
      this.weeks.push(days);
    }
  }

  selectDate(event: CalendarDay) {
    this.weeks.forEach(week => {
      week.forEach(day => {
        day.isSelect = false;
      });
    });
    event.isSelect = true;

    this.selectDateEvent.emit(event);
  }
}
