import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<any>;
    findOneByEmail(email: any): Model<User>;
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User>;
    delete(id: string): Promise<User>;
    update(id: string, user: User): Promise<User>;
}
