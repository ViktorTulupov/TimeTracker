import { Task } from './task';

export class CalendarDay {

    public isSelect: boolean;
    public workTime: number;

    constructor(public date: Date,
                public tasks: Task[]) {
        this.isSelect = false;
        this.workTime = 0;
    }
}
