import { PartialType } from '@nestjs/mapped-types';
import { CreateHarrypotterDto } from './create-harrypotter.dto';

export class UpdateHarrypotterDto extends PartialType(CreateHarrypotterDto) {
  //   title?: string;
  //   subtitle?: string;
  //   imageUrl?: string;
  //   description?: string;
}
