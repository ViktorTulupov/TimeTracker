import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss']
})
export class LoggedUserComponent implements OnInit {

  loggedInfo: string;

  constructor() { }

  ngOnInit() {
    const loggedUser: User = JSON.parse(localStorage.getItem('loggedUser'));
    this.loggedInfo = 'unautorized';
    if (loggedUser) {
        this.loggedInfo = loggedUser.name;
    }
  }

}
