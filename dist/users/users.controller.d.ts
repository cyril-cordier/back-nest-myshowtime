import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findOne(id: any): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: any): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<any>;
    update(updateUserDto: CreateUserDto, id: any): Promise<User>;
}
