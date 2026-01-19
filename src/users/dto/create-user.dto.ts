import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsNotEmpty()
    @MaxLength(100)
    username: string;

    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @MaxLength(100)
    password: string;

    @IsOptional()
    profile: CreateProfileDto ;
}