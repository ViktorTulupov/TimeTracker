export class Task {
    constructor(
        public date: Date,
        public project: string,
        public task: string,
        public time: number,
        public comment: string = null) {
    }
}
