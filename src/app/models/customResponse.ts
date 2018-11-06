export class CustomResponse {
    constructor(public status: number,
        public message: string,
        public body: object) { }
}
