import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HarrypotterService } from './harrypotter.service';
import { CreateHarrypotterDto } from './dto/create-harrypotter.dto';
import { UpdateHarrypotterDto } from './dto/update-harrypotter.dto';

@Controller('harrypotter')
export class HarrypotterController {
  constructor(private readonly harrypotterService: HarrypotterService) {}

  @Post()
  create(@Body() createHarrypotterDto: CreateHarrypotterDto) {
    return this.harrypotterService.create(createHarrypotterDto);
  }

  @Get()
  findAll() {
    return this.harrypotterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.harrypotterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHarrypotterDto: UpdateHarrypotterDto,
  ) {
    return this.harrypotterService.update(+id, updateHarrypotterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.harrypotterService.remove(+id);
  }
}
