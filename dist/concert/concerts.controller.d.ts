import { CreateConcertDto } from './dto/create-concert.dto';
import { ConcertsService } from './concerts.service';
import { Concert } from './concert.interface';
export declare class ConcertsController {
    private concertsService;
    constructor(concertsService: ConcertsService);
    findOne(id: any): Promise<Concert>;
    findAll(): Promise<Concert[]>;
    delete(id: any): Promise<Concert>;
    create(createConcertDto: CreateConcertDto): Promise<any>;
    update(updateConcertDto: CreateConcertDto, id: any): Promise<Concert>;
}
