import {  IsNotEmpty, MinLength, MaxLength, ValidateIf,IsDate } from 'class-validator';

export class CreateTicketDto {
    @ValidateIf(dto => dto.userId != null)
    @IsNotEmpty()
    readonly userId: string;
    @ValidateIf(dto => dto.concertId != null)
    @IsNotEmpty()
    readonly concertId: string;
   


    
}