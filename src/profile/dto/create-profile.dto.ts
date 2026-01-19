import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto{
        @IsString({ message: "Name must be a string !" })
        @IsNotEmpty({ message: "Name can't be empty!" })
        @IsOptional()
        @MinLength(3, { message: "Name should be minimun 3 characters !" })
        @MaxLength(100)
        firstName?: string;
    
        @IsString({ message: "Name must be a string !" })
        @IsNotEmpty({ message: "Name can't be empty!" })
        @MinLength(3, { message: "Name should be minimun 3 characters !" })
        @MaxLength(100)
        @IsOptional()
        lastName?: string;
    
        @IsOptional()
        @IsString()
        @IsOptional()
        @MaxLength(10)
        gender?: string;


        @IsOptional()
        @IsDate()
        dateOfBirth?: Date;

        @IsOptional()
        @IsString()
        bio?: string;

        @IsString()
        @IsOptional()
        profileImage?: string
}