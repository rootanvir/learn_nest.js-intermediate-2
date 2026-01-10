import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class createUserDto{
    @IsNumber()
    id: number;

    @IsString({message:"Name must be a string !"})
    @IsNotEmpty({message:"Name can't be empty!"})
    @MinLength(3,{message: "Name should be minimun 3 characters !"})
    name: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsBoolean()
    isMarried: boolean;
}