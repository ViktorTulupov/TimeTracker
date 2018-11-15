import { Task } from '../../../../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }

  compareDate(dateOne: Date, dateTwo: Date): boolean {
    const year = dateOne.getFullYear();
    const month = dateOne.getMonth();
    const day = dateOne.getDate();
    return dateTwo.getFullYear() === year
      && dateTwo.getMonth() === month
      && dateTwo.getDate() === day;
  }

  getTasks(date: Date): Promise<Task[]> {
    return this.http.get<Task[]>('tasks', { params: { date: date.toString() }, /*observe: 'response'*/ })
      .toPromise();
  }

  delleteTasks(id: number) { }

  addTasks(task: Task) { }

}
