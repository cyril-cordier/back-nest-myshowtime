import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './ticket.interface';
export declare class TicketsService {
    private ticketModel;
    constructor(ticketModel: Model<Ticket>);
    create(createTicketDto: CreateTicketDto): Promise<any>;
    findAll(): Promise<Ticket[]>;
    findOneById(id: string): Promise<Ticket>;
    delete(id: string): Promise<Ticket>;
    update(id: string, Ticket: Ticket): Promise<Ticket>;
}
