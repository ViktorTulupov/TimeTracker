import { WeekDay } from './../../../../../models/weekDay.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit {

  weekDays: string[];

  constructor() {
    const keys = Object.keys(WeekDay);
    this.weekDays = keys.slice(keys.length / 2);
  }

  ngOnInit() {
  }

}
