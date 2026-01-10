import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query,ValidationPipe } from "@nestjs/common"
import { UsersService } from "./users.service";
import { createUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UserController {
    userService: UsersService;
    constructor() {
        this.userService = new UsersService();
    }

    @Get()
    getUsers(@Query('limit', ParseIntPipe,new DefaultValuePipe(10)) limit: number,
             @Query('page', ParseIntPipe, new DefaultValuePipe(1)) page: number) {
            console.log(limit,page);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(+id);
    }


    @Post()
    ceateUser(@Body(new ValidationPipe()) user: createUserDto) {
        
        //this.userService.createUser(user);
        return `new user added successfully !`;
    }
}