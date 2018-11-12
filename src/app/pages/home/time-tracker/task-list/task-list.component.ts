import { Task } from './../../../../models/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
    if (!this.tasks) {
      this.tasks = [];
    }
  }

}
