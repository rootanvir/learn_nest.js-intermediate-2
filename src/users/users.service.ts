import { Injectable } from "@nestjs/common";

export class UsersService {
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean }[] = [
        { id : 1, name: 'john', email:'john@gmail.com', gender: 'male', isMarried: true },
        { id : 2,name: 'lily', email:'lily@gmail.com', gender: 'female', isMarried: true },
        { id : 3,name: 'matty', email:'matty@gmail.com', gender: 'male', isMarried: false },
        { id : 4,name: 'derry', email:'derry@gmail.com', gender: 'male', isMarried: false }
    ]
    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x => x.id === id);
    }



    createUser(user: {id: number, name: string, email: string, gender: string, isMarried: boolean}){
        this.users.push(user);
    }
}