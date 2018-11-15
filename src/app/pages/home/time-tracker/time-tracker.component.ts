import { CalendarDay } from './../../../models/calendarDay';
import { Task } from './../../../models/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  day: CalendarDay;
  constructor() {}

  ngOnInit() {
  }

  selectDate(event: CalendarDay) {
    this.day = event;
  }
}
