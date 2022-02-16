import { Test, TestingModule } from '@nestjs/testing';
import { HarrypotterService } from './harrypotter.service';

describe('HarrypotterService', () => {
  let service: HarrypotterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HarrypotterService],
    }).compile();

    service = module.get<HarrypotterService>(HarrypotterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
