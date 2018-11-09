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

  isWeekEnd = false;

  constructor() {}

  ngOnInit() {
    if (this.day && this.day.date) {
      const weekDay = this.day.date.getDay();
      this.isWeekEnd = weekDay === WeekDay.Saturday || weekDay === WeekDay.Sunday;
    }
  }

}
