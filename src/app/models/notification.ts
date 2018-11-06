export enum NotificalionType {
    bad,
    good
}

export class Notification {
    constructor(public type: NotificalionType, public message: string) { }
}
