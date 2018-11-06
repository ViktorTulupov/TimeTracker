import { NotificationService } from './notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification } from './../models/notification';

@Component({
    selector: 'app-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.scss'],
    // providers: [NotificationService]
})
export class NotificationComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    notification: Notification;

    constructor(private notificationService: NotificationService) { }

    ngOnInit() {
        this.subscription = this.notificationService
            .subject
            .subscribe(data => {
                this.notification = data;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
