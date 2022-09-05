import { ROLES } from "./roles.enum";

export class User {
    id = '';
    username = '';
    email = '';
    password = '';
    role = ROLES.USER;
    tasks = [];

    constructor(id, username, email, password, role, tasks) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.tasks = tasks
    }
}