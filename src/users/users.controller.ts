import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common"
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUserParamDto } from "./dto/get-user-param.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UserController {
    
    constructor(private userService: UsersService) {

    }
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }


    @Get(':isMarried')
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
             @Query('page',  new DefaultValuePipe(1), ParseIntPipe) page: number,
             @Param() param: GetUserParamDto
    ) {
        console.log(param);
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.userService.getUserById(id);
    }



    @Post()
    ceateUser(@Body() user: CreateUserDto) {

        //this.userService.createUser(user);
        console.log(user instanceof CreateUserDto);
        return `new user added successfully !`;
    }

    @Patch()
    updateUser(@Body() user:UpdateUserDto){
        console.log(user);
        return 'user updated successfully !';
    }   
}