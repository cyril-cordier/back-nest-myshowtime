import { Model } from 'mongoose';
import { CreateConcertDto } from './dto/create-concert.dto';
import { Concert } from './concert.interface';
export declare class ConcertsService {
    private concertModel;
    constructor(concertModel: Model<Concert>);
    create(createConcertDto: CreateConcertDto): Promise<any>;
    findAll(): Promise<Concert[]>;
    findOneById(id: string): Promise<Concert>;
    delete(id: string): Promise<Concert>;
    update(id: string, concert: Concert): Promise<Concert>;
}
