import { Notification } from './../models/notification';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private behaviorSubject: BehaviorSubject<any>;

  constructor() {
      this.behaviorSubject = new BehaviorSubject(null);
  }

  error(message: string) {
      this.behaviorSubject.next(new Notification('error', message));
  }

  get subject(): BehaviorSubject<any> {
    return this.behaviorSubject;
  }

}
