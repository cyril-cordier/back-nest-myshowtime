import { Controller, Get, Post, Body, UseGuards, Param, Delete,Put } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.interface'
import { AuthGuard } from '@nestjs/passport';

@Controller('tickets')
export class TicketsController {

    constructor(private ticketsService: TicketsService) {

    }

   @Get(':id')
   @UseGuards(AuthGuard())
   async findOne(@Param('id') id): Promise<Ticket>{
       return this.ticketsService.findOneById(id);
   }


   @Get()
    @UseGuards(AuthGuard()) 
   async findAll(): Promise<Ticket[]>{
       return this.ticketsService.findAll();
   }

   @Delete(':id')
   @UseGuards(AuthGuard())
   async delete(@Param('id') id): Promise<Ticket>{
       return this.ticketsService.delete(id);
   }



    @Post() 
    async create(@Body() createTicketDto: CreateTicketDto) {
        return await this.ticketsService.create(createTicketDto);
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    async update(@Body() updateTicketDto: CreateTicketDto,@Param('id') id): Promise<Ticket>{
        return await this.ticketsService.update(id,updateTicketDto);
    }

   /*  // This route will require successfully passing our default auth strategy (JWT) in order
    // to access the route
    @Get('test')
    @UseGuards(AuthGuard())
    testAuthRoute(){
        return {
            message: 'You did it!'
        }
    } */

}
