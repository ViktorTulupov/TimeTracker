import { Task } from './../../../../../models/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() taskDeleteEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
    if (!this.task.comment) {
      this.task.comment = '-';
    }
  }

  dellTask() {
    this.taskDeleteEvent.emit(this.task);
  }

}
