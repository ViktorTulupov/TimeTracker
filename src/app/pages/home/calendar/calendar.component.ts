import { WeekDay } from './../../../models/weekDay.enum';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { CalendarDay } from './../../../models/calendarDay';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  month = 12;
  year = 2018;
  weeks: CalendarDay[][];
  now: Date;

  constructor() {
    this.now = new Date();
    this.weeks = [];
  }

  ngOnInit() {
    this.generateMonthData();
  }

  daysInMonth(): number {
    const date = new Date(this.year, this.month, 0);
    return date.getDate();
  }

  firstEmptyDays(): number {
    const date = new Date(this.year, this.month - 1, 1);
    const day = date.getDay();
    switch (day) {
      case WeekDay.Monday:
        return 0;
      case WeekDay.Tuesday:
        return 1;
      case WeekDay.Wednesday:
        return 2;
      case WeekDay.Thursday:
        return 3;
      case WeekDay.Friday:
        return 4;
      case WeekDay.Saturday:
        return 5;
      case WeekDay.Sunday:
        return 6;
    }
  }

  generateMonthData() {
    const daysInMonth = this.daysInMonth();
    const firstEmptyDays = this.firstEmptyDays();
    const monthWeeks = (daysInMonth + firstEmptyDays) > 35 ? 6 : 5;

    let monthDay = 1;

    for (let week = 0; week < monthWeeks; week++) {
      const days: CalendarDay[] = [];
      for (let day = 0; day < 7; day++) {
        if (monthDay <= firstEmptyDays || monthDay > (daysInMonth + firstEmptyDays)) {
          days.push(new CalendarDay(null, false));
        } else {
          const date = new Date(this.year, this.month - 1, (monthDay - firstEmptyDays));
          const weekDay = date.getDay() > 5;
          days.push(new CalendarDay(date, weekDay));
        }
        monthDay++;
      }
      this.weeks.push(days);
    }
  }

}
