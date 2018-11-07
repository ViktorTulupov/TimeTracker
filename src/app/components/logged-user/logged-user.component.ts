import { LoginService } from './../pages/login/login.service';
import { User } from './../models/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss']
})
export class LoggedUserComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  loggedInfo: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.subscription = this.loginService
      .subject
      .subscribe(data => {
        this.loggedInfo = data;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
