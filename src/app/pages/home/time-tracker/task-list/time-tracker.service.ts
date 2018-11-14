import { Task } from '../../../../models/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor() { }

  compareDate(dateOne: Date, dateTwo: Date): boolean {
    const year = dateOne.getFullYear();
    const month = dateOne.getMonth();
    const day = dateOne.getDate();
    return dateTwo.getFullYear() === year
      && dateTwo.getMonth() === month
      && dateTwo.getDate() === day;
  }

  getTasks(date: Date): Task[] {
    if (this.compareDate(new Date(), date)) {
      const task = new Task(new Date(), 'TimeTracker', '0001', 5, 'Create project');
      const tasks = [task, task, task, task];
      return tasks;
    }
    return null;
  }

}
