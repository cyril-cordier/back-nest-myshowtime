import { Controller, Get, Post, Body, UseGuards, Param, Delete,Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.interface'
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

   @Get(':id')
   @UseGuards(AuthGuard())
   async findOne(@Param('id') id): Promise<User>{
       return this.usersService.findOneById(id);
   }
   

   @Get()
   @UseGuards(AuthGuard())
   async findAll(): Promise<User[]>{
       return this.usersService.findAll();
   }

   @Delete(':id')
   @UseGuards(AuthGuard())
   async delete(@Param('id') id): Promise<User>{
       return this.usersService.delete(id);
   }



    @Post() 
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    async update(@Body() updateUserDto: CreateUserDto,@Param('id') id): Promise<User>{
        return await this.usersService.update(id,updateUserDto);
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
