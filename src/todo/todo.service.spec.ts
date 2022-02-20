import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  const mockedTodoRepo = {
    // mock the repo `findOneOrFail`
    findAll: jest.fn((id) => Promise.resolve(Todo)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        { provide: getRepositoryToken(Todo), useValue: mockedTodoRepo },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  afterEach(() => jest.clearAllMocks());

  // describe('findAll', () => {
  //   it('should return an array of cats', async () => {
  //     const result = ['test'];
  //     jest.spyOn(service, 'findAll').mockImplementation(() => result);

  //     expect(await catsController.findAll()).toBe(result);
  //   });
  // });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
