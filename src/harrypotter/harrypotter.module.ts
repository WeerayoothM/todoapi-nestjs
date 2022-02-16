import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HarrypotterService } from './harrypotter.service';
import { HarrypotterController } from './harrypotter.controller';
import { Harrypotter } from './entities/harrypotter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Harrypotter])],
  controllers: [HarrypotterController],
  providers: [HarrypotterService],
})
export class HarrypotterModule {}
