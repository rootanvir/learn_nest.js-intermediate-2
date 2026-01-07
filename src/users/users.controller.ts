import { Controller, Get, Param, Post, Query } from "@nestjs/common"
import { UsersService } from "./users.service";

@Controller('users')
export class UserController {

    @Get()
    getUsers(@Query() query: any ) {
        const usersService = new UsersService();
        if(query.gender){
            return usersService.getAllUsers().filter(u => u.gender === query.gender);
        }
    }

    @Get(':id')
    getUserById(@Param('id') id: any) {
        const usersService = new UsersService();
        return usersService.getUserById(+id);
    }


    @Post()
    ceateUser() {
        const user = { id: 5, name: 'pennywise', age: 194, gender: 'male', isMarried: false }
        const usersService = new UsersService();
        usersService.createUser(user);
        return `new user added successfully !`;
    }
}