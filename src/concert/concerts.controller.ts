import { Controller, Get, Post, Body, UseGuards, Param, Delete,Put } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { ConcertsService } from './concerts.service';
import { Concert } from './concert.interface'
import { AuthGuard } from '@nestjs/passport';

@Controller('concerts')
export class ConcertsController {

    constructor(private concertsService: ConcertsService) {

    }

   @Get(':id')

   async findOne(@Param('id') id): Promise<Concert>{
       return this.concertsService.findOneById(id);
   }


   @Get()

   async findAll(): Promise<Concert[]>{
       return this.concertsService.findAll();
   }

   @Delete(':id')
   @UseGuards(AuthGuard())
   async delete(@Param('id') id): Promise<Concert>{
       return this.concertsService.delete(id);
   }



    @Post() 
    async create(@Body() createConcertDto: CreateConcertDto) {
        return await this.concertsService.create(createConcertDto);
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    async update(@Body() updateConcertDto: CreateConcertDto,@Param('id') id): Promise<Concert>{
        return await this.concertsService.update(id,updateConcertDto);
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
