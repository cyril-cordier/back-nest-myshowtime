import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PassportModule } from '@nestjs/passport';
import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';
import { ConcertSchema } from './concert.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Concert', schema: ConcertSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  exports: [ConcertsService],
  controllers: [ConcertsController],
  providers: [ConcertsService]
})
export class ConcertsModule {}
