import { Harrypotter } from './entities/harrypotter.entity';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHarrypotterDto } from './dto/create-harrypotter.dto';
import { UpdateHarrypotterDto } from './dto/update-harrypotter.dto';
import { Repository } from 'typeorm';

@Injectable()
export class HarrypotterService {
  constructor(
    @InjectRepository(Harrypotter)
    private harryRepository: Repository<Harrypotter>,
  ) {}

  async create(createHarrypotterDto: CreateHarrypotterDto) {
    const harryPotter = await this.harryRepository.create(createHarrypotterDto);
    return this.harryRepository.save(harryPotter);
  }

  findAll() {
    return this.harryRepository.find();
  }

  findOne(id: number) {
    return this.harryRepository.findOne(id);
  }

  async update(id: number, updateHarrypotterDto: UpdateHarrypotterDto) {
    return this.harryRepository.update(id, updateHarrypotterDto);
  }

  remove(id: number) {
    return this.harryRepository.delete(id);
  }
}
