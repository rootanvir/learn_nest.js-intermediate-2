import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString({ message: "Name must be a string !" })
    @IsNotEmpty({ message: "Name can't be empty!" })
    @MinLength(3, { message: "Name should be minimun 3 characters !" })
    @MaxLength(100)
    firstName: string;

    @IsString({ message: "Name must be a string !" })
    @IsNotEmpty({ message: "Name can't be empty!" })
    @MinLength(3, { message: "Name should be minimun 3 characters !" })
    @MaxLength(100)
    lastName: string;

    @IsString()
    @IsOptional()
    @MaxLength(10)
    gender?: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @MaxLength(100)
    password: string;

}