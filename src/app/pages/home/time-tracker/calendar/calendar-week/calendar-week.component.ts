import { CalendarDay } from '../../../../../models/calendarDay';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss']
})
export class CalendarWeekComponent implements OnInit {

  @Input() taskLoad: boolean;
  @Input() week: CalendarDay[];
  @Output() selecWeekDayEvent = new EventEmitter<CalendarDay>();

  constructor() { }

  ngOnInit() {
  }

  selectWeekDay(event: CalendarDay) {
    this.selecWeekDayEvent.emit(event);
  }

}
