import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { ConflictException } from '@nestjs/common';
import { Ticket } from './ticket.interface';


@Injectable()
export class TicketsService {

  constructor(@InjectModel('Ticket') private ticketModel: Model<Ticket>) {}

  async create(createTicketDto: CreateTicketDto) {

    let createdTicket = new this.ticketModel(createTicketDto);
    return await createdTicket.save();

  }


  async findAll(): Promise<Ticket[]>{
    return await this.ticketModel.find();
  }

  async findOneById(id: string): Promise<Ticket>{
    return await this.ticketModel.findOne({_id: id})
  }

  async delete(id: string): Promise<Ticket>{
    return await this.ticketModel.findOneAndDelete({_id: id})
  }

  async update(id: string, Ticket: Ticket): Promise<Ticket>{
  

    return await this.ticketModel.findOneAndUpdate({_id: id},Ticket,{new: true});
  }

}
