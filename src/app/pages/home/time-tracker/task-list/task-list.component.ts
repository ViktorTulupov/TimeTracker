import { TaskListService } from './time-tracker.service';
import { CalendarDay } from './../../../../models/calendarDay';
import { Task } from './../../../../models/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  @Input() day: CalendarDay;

  isNewTask = false;
  taskForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private taskService: TaskListService) { }

  ngOnInit() {
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
    this.controls.time.setValue('0');
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

    const task = new Task(this.day.date,
      this.controls.project.value,
      this.controls.task.value,
      this.controls.time.value,
      this.controls.comment.value);

    this.day.tasks.push(task);
    this.day.workTime = this.taskService.calcWorkTime(this.day.tasks);
    this.rollbackTask();

    this.taskService.addTasks(task);
  }

  taskDelete(event: Task) {
    const index = this.day.tasks.indexOf(event);
    this.day.tasks.splice(index, 1);
    this.day.workTime = this.taskService.calcWorkTime(this.day.tasks);

    this.taskService.delleteTasks(index);
  }

}
