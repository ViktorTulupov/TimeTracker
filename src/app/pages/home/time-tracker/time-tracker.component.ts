import { Task } from './../../../models/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  tasks: Task[];

  constructor() {}

  ngOnInit() {
    this.tasks = [];
  }

  selectDate(event: Task[]) {
    this.tasks = event;
  }
}
