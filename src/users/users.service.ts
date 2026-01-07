import { match } from "assert";

export class UsersService {
    users: { id: number, name: string, age: number, gender: string, isMarried: boolean }[] = [
        { id : 1, name: 'john', age: 28, gender: 'male', isMarried: true },
        { id : 2,name: 'lily', age: 25, gender: 'female', isMarried: true },
        { id : 3,name: 'matty', age: 20, gender: 'male', isMarried: false },
        { id : 4,name: 'derry', age: 15, gender: 'male', isMarried: false }
    ]
    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x => x.id === id);
    }



    createUser(user: {id: number, name: string, age: number, gender: string, isMarried: boolean}){
        this.users.push(user);
    }
}