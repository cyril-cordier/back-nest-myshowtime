import { IsEmail, IsNotEmpty, MinLength, MaxLength, ValidateIf } from 'class-validator';

export class CreateUserDto {
    @ValidateIf(dto => dto.email != null)
    @IsEmail()
    readonly email: string;
    @ValidateIf(dto => dto.password != null)
    @IsNotEmpty()
    @MinLength(5)
    readonly password: string;
    @ValidateIf(dto => dto.password_confirmation != null)
    @IsNotEmpty()
    @MinLength(5)
    readonly password_confirmation: string;
    @ValidateIf(dto => dto.firstname != null)
    @IsNotEmpty()
    readonly firstname: string;
    @ValidateIf(dto => dto.lastname != null)
    @IsNotEmpty()
    readonly lastname: string;
    @ValidateIf(dto => dto.phone != null)
    @MinLength(10)
    readonly phone: string;
    @ValidateIf(dto => dto.admin != null)
    
    readonly admin: String;

}