import { WeekDay } from './../../../../models/weekDay.enum';
import { CalendarDay } from './../../../../models/calendarDay';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-calendr-day',
  templateUrl: './calendr-day.component.html',
  styleUrls: ['./calendr-day.component.scss']
})

export class CalendrDayComponent implements OnInit {

  @Input() day: CalendarDay;
  @Output() selectDayEvent = new EventEmitter<CalendarDay>();

  isWeekEnd = false;
  isNow = false;

  constructor() { }

  ngOnInit() {
    if (this.day && this.day.date) {
      this.isWeekEnd = this.checkWeekEnd(this.day.date);
      this.isNow = this.checkNow(this.day.date);
    }
  }

  checkWeekEnd(date: Date): boolean {
    const day = this.day.date.getDay();
    const isWeekEnd = day === WeekDay.Sat || day === WeekDay.Sun;
    return isWeekEnd;
  }

  checkNow(date: Date): boolean {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const isNow = date.getFullYear() === year
      && date.getMonth() === month
      && date.getDate() === day;
    return isNow;
  }

  selectDay(event: any) {
    this.selectDayEvent.emit(this.day);
  }

}
