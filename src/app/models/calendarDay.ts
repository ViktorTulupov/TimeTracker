import { Task } from './task';

export class CalendarDay {
    constructor(
        public date: Date,
        public tasks: Task[],
        public isSelect: boolean = false
    ) { }

}
