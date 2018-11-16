import { TaskListService } from '../time-tracker.service';
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
      project: ['', [Validators.required, Validators.maxLength(15)]],
      task: ['', [Validators.required, Validators.maxLength(4)]],
      time: [8, [Validators.min(0), Validators.max(24)]],
      comment: ['', Validators.maxLength(20)]
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
    this.controls.time.setValue(8);
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
      `#${this.controls.task.value}`,
      this.controls.time.value,
      this.controls.comment.value);

    this.day.tasks.push(task);
    this.day.workTime = this.taskService.calcWorkTime(this.day.tasks);
    this.rollbackTask();

    this.taskService.addTasks(task)
      .then(response => {
        task.id = response.id;
      });
  }

  taskDelete(event: Task) {
    this.taskService.delleteTasks(event.id)
      .then(ersponse => {
        const index = this.day.tasks.indexOf(event);
        this.day.tasks.splice(index, 1);
        this.day.workTime = this.taskService.calcWorkTime(this.day.tasks);
      });
  }

}
