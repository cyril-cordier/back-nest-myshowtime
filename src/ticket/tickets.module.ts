import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PassportModule } from '@nestjs/passport';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { TicketSchema } from './ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Ticket', schema: TicketSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  exports: [TicketsService],
  controllers: [TicketsController],
  providers: [TicketsService]
})
export class TicketsModule {}
