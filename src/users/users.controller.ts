import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common"
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UserController {

    constructor(private usersService: UsersService) {

    }

    @Get()
    getUsers() {
        return this.usersService.getAllUsers();
    }



    @Post()
    ceateUser(@Body() user: CreateUserDto) {
        this.usersService.createUser(user);
    }

}