import { Month } from './../../../../../models/month.enum';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  @Input() month: Month;
  @Input() year: number;
  @Output() monthChange = new EventEmitter<Month>();
  @Output() yearChange = new EventEmitter<number>();
  @Output() dateChange = new EventEmitter<boolean>();

  monthName: string;

  constructor() {
  }

  ngOnInit() {
    this.monthName = Month[this.month];
  }

  incMonth() {
    if (this.month < Month.December) {
      this.month++;
    } else {
      this.month = Month.January;
      this.year++;
    }
    this.sendEmit();
  }

  decMonth() {
    if (this.month > Month.January) {
      this.month--;
    } else {
      this.month = Month.December;
      this.year--;
    }
    this.sendEmit();
  }

  goNow() {
    const now = new Date();
    this.month = now.getMonth();
    this.year = now.getFullYear();
    this.sendEmit();
  }

  sendEmit() {
    this.monthName = Month[this.month];
    this.monthChange.emit(this.month);
    this.yearChange.emit(this.year);
    this.dateChange.emit(true);
  }
}
