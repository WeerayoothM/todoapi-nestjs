import { Test, TestingModule } from '@nestjs/testing';
import { HarrypotterController } from './harrypotter.controller';
import { HarrypotterService } from './harrypotter.service';

describe('HarrypotterController', () => {
  let controller: HarrypotterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarrypotterController],
      providers: [HarrypotterService],
    }).compile();

    controller = module.get<HarrypotterController>(HarrypotterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
