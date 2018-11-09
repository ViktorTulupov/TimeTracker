import { CalendarDay } from '../../../../models/calendarDay';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss']
})
export class CalendarWeekComponent implements OnInit {

  @Input() week: CalendarDay[];

  constructor() { }

  ngOnInit() {
  }

}
