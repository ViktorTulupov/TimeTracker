import { Notification, NotificalionType } from './../models/notification';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private behaviorSubject: BehaviorSubject<any>;

  constructor(private router: Router) {
    this.behaviorSubject = new BehaviorSubject(null);

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          this.behaviorSubject.next(null);
      }
    });
  }

  message(message: string, type: NotificalionType = NotificalionType.good) {
    this.behaviorSubject.next(new Notification(type, message));
  }

  get subject(): BehaviorSubject<any> {
    return this.behaviorSubject;
  }

}
