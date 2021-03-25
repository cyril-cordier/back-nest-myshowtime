import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateConcertDto } from './dto/create-concert.dto';
import { ConflictException } from '@nestjs/common';
import { Concert } from './concert.interface';


@Injectable()
export class ConcertsService {

  constructor(@InjectModel('Concert') private concertModel: Model<Concert>) {}

  async create(createConcertDto: CreateConcertDto) {

    let createdConcert = new this.concertModel(createConcertDto);
    return await createdConcert.save();

  }


  async findAll(): Promise<Concert[]>{
    return await this.concertModel.find();
  }

  async findOneById(id: string): Promise<Concert>{
    return await this.concertModel.findOne({_id: id})
  }

  async delete(id: string): Promise<Concert>{
    return await this.concertModel.findOneAndDelete({_id: id})
  }

  async update(id: string, concert: Concert): Promise<Concert>{
  

    return await this.concertModel.findOneAndUpdate({_id: id},concert,{new: true});
  }

}
