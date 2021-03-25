import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    if ((await this.userModel.findOne({ email: createUserDto.email }))){
      throw new ConflictException('Email already taken');
    }
    if ((await this.userModel.findOne({ phone: createUserDto.phone }))){
      throw new ConflictException('Phone already taken');
    }
    if (createUserDto.password != createUserDto.password_confirmation){
      throw new ConflictException('Password must be identical');
    }

    

    let createdUser = new this.userModel(createUserDto);
    return await createdUser.save();

  }

  async findOneByEmail(email): Model<User> {
    
 
    return await this.userModel.findOne({email: email});

  }

  async findAll(): Promise<User[]>{
    return await this.userModel.find();
  }

  async findOneById(id: string): Promise<User>{
    return await this.userModel.findOne({_id: id})
  }

  async delete(id: string): Promise<User>{
    return await this.userModel.findOneAndDelete({_id: id})
  }

  async update(id: string, user: User): Promise<User>{
    if ((await this.userModel.findOne({ email: user.email }))){
      throw new ConflictException('Email already taken');
    }
 

    return await this.userModel.findOneAndUpdate({_id: id},user,{new: true});
  }

}
