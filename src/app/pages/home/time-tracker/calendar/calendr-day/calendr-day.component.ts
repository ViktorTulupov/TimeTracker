import { WeekDay } from './../../../../../models/weekDay.enum';
import { CalendarDay } from './../../../../../models/calendarDay';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskListService } from '../../time-tracker.service';


@Component({
  selector: 'app-calendr-day',
  templateUrl: './calendr-day.component.html',
  styleUrls: ['./calendr-day.component.scss'],
  providers: [TaskListService]
})

export class CalendrDayComponent implements OnInit {

  @Input() taskLoad = false;
  @Input() day: CalendarDay;
  @Output() selectDayEvent = new EventEmitter<CalendarDay>();

  isWeekEnd = false;
  isNow = false;

  constructor(private taskService: TaskListService) { }

  ngOnInit() {
    if (this.day && this.day.date) {
      this.isWeekEnd = this.checkWeekEnd(this.day.date);
      this.isNow = this.taskService.compareDate(new Date(), this.day.date);

      this.taskService.getTasks(this.day.date)
        .then(response => {
          this.day.tasks = response;
          this.day.workTime = this.taskService.calcWorkTime(this.day.tasks);
        });
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
