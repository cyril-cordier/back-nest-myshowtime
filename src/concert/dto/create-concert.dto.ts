import {  IsNotEmpty, MinLength, MaxLength, ValidateIf,IsDate } from 'class-validator';

export class CreateConcertDto {
    @ValidateIf(dto => dto.date != null)
  
    readonly date: String;
    @ValidateIf(dto => dto.title != null)
    @IsNotEmpty()
    @MinLength(3)
    readonly title: string;
    @ValidateIf(dto => dto.location != null)
    @IsNotEmpty()
    readonly location: string;
    @ValidateIf(dto => dto.price != null)
    @IsNotEmpty()
    readonly price: string;
    @ValidateIf(dto => dto.band != null)
    @IsNotEmpty()
    readonly band:string;
    @ValidateIf(dto => dto.description != null)
    @IsNotEmpty()
    readonly description:string;
    @ValidateIf(dto => dto.image != null)
    @IsNotEmpty()
    readonly image:string;
    @ValidateIf(dto => dto.genre != null)
    @IsNotEmpty()
    readonly genre:string;
    readonly qrcode:string;

    
}