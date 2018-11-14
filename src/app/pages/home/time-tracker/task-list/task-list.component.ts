import { Task } from './../../../../models/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  isNewTask = false;
  taskForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isNewTask = false;

    if (!this.tasks) {
      this.tasks = [];
    }

    this.taskForm = this.formBuilder.group({
      project: ['', Validators.required],
      task: ['', Validators.required],
      time: ['0', Validators.min(0)],
      comment: ['', Validators.nullValidator]
    });
  }

  newTask() {
    this.isNewTask = true;
  }


  rollbackTask() {
    this.isNewTask = false;
    this.submitted = false;
    this.controls.project.setValue('');
    this.controls.task.setValue('');
    this.controls.time.setValue('');
    this.controls.comment.setValue('');
  }

  get controls() {
    return this.taskForm.controls;
  }

  createNewTask() {
    this.submitted = true;

    if (this.taskForm.invalid) {
      return;
    }

    this.rollbackTask();
  }

}
