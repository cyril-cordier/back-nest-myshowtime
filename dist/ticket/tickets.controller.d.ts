import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.interface';
export declare class TicketsController {
    private ticketsService;
    constructor(ticketsService: TicketsService);
    findOne(id: any): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    delete(id: any): Promise<Ticket>;
    create(createTicketDto: CreateTicketDto): Promise<any>;
    update(updateTicketDto: CreateTicketDto, id: any): Promise<Ticket>;
}
