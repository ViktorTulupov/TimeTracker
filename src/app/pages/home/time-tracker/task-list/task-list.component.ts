import { Task } from './../../../../models/task';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
    this.tasks = [null, null, null, null, null];
  }

}
