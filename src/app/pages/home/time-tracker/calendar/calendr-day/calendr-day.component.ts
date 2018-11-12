import { WeekDay } from './../../../../../models/weekDay.enum';
import { CalendarDay } from './../../../../../models/calendarDay';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { CalendarService } from '../calendar.service';


@Component({
  selector: 'app-calendr-day',
  templateUrl: './calendr-day.component.html',
  styleUrls: ['./calendr-day.component.scss'],
  providers: [CalendarService]
})

export class CalendrDayComponent implements OnInit {

  @Input() day: CalendarDay;
  @Output() selectDayEvent = new EventEmitter<CalendarDay>();

  isWeekEnd = false;
  isNow = false;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    if (this.day && this.day.date) {
      this.isWeekEnd = this.checkWeekEnd(this.day.date);
      this.isNow = this.calendarService.compareDate(new Date(), this.day.date);
    }
  }

  checkWeekEnd(date: Date): boolean {
    const day = this.day.date.getDay();
    const isWeekEnd = day === WeekDay.Sat || day === WeekDay.Sun;
    return isWeekEnd;
  }

  selectDay(event: any) {
    this.selectDayEvent.emit(this.day);
  }

}
