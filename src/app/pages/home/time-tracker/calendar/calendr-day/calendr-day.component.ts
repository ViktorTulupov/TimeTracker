import { WeekDay } from './../../../../../models/weekDay.enum';
import { CalendarDay } from './../../../../../models/calendarDay';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TaskListService } from '../../task-list/time-tracker.service';


@Component({
  selector: 'app-calendr-day',
  templateUrl: './calendr-day.component.html',
  styleUrls: ['./calendr-day.component.scss'],
  providers: [TaskListService]
})

export class CalendrDayComponent implements OnInit, OnDestroy {

  @Input() taskLoad = false;
  @Input() day: CalendarDay;
  @Output() selectDayEvent = new EventEmitter<CalendarDay>();

  isWeekEnd = false;
  isNow = false;
  taskTime = 0;

  constructor(private taskService: TaskListService) { }

  ngOnInit() {
    if (this.day && this.day.date) {
      this.isWeekEnd = this.checkWeekEnd(this.day.date);
      this.isNow = this.taskService.compareDate(new Date(), this.day.date);

      this.taskService.getTasks(this.day.date)
        .then(response => {
          this.day.tasks = response;
          this.taskTime = 0;
          this.day.tasks.forEach(task => {
            this.taskTime += task.time;
          });
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
    console.log(this.day);
  }

}
