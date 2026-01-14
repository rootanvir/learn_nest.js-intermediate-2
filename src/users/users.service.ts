import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

export class UsersService {
    constructor(@Inject(forwardRef (() => AuthService)) private readonly authService: AuthService) { }

    users: { id: number, name: string, email: string, gender: string, isMarried: boolean, password: string }[] = [
        { id: 1, name: 'john', email: 'john@gmail.com', gender: 'male', isMarried: true, password: '123' },
        { id: 2, name: 'lily', email: 'lily@gmail.com', gender: 'female', isMarried: true, password: '123' },
        { id: 3, name: 'matty', email: 'matty@gmail.com', gender: 'male', isMarried: false, password: '123' },
        { id: 4, name: 'derry', email: 'derry@gmail.com', gender: 'male', isMarried: false, password: '123' }
    ]
    getAllUsers() {
        if (this.authService.isAuthenticated) {
            return this.users;
        }
        return 'YOU_ARE_NOT_LOGIN';
    }

    getUserById(id: Number) {
        return this.users.find(x => x.id === id);
    }



    createUser(user: { id: number, name: string, email: string, gender: string, isMarried: boolean, password: string }) {
        this.users.push(user);
    }
}