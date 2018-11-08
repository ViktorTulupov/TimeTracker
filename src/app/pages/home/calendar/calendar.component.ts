import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  month = 6;
  year = 2018;
  weeks: string[][];
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
    return day - 1;
  }

  generateMonthData() {
    const daysInMonth = this.daysInMonth();
    const firstEmptyDays = this.firstEmptyDays();
    let monthDay = 1;

    for (let week = 0; week < 6; week++) {
      const days: string[] = [];
      for (let day = 0; day < 7; day++) {
        if (monthDay <= firstEmptyDays || monthDay > (daysInMonth + firstEmptyDays)) {
          days.push(' ');
        } else {
          days.push((monthDay - firstEmptyDays).toString());
        }
        monthDay++;
      }
      this.weeks.push(days);
    }
  }

}
