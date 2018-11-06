export class User {
    login: string;
    password: string;
    token: string;
    name: string;

    constructor(login: string, password: string, token: string, name: string) {
        this.login = login;
        this.password = password;
        this.token = token;
        this.name = name;
    }
}
