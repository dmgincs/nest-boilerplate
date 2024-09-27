import { Test } from '@nestjs/testing';
import { ExampleService } from './example.service';
import { ExampleServiceModule } from './example.module';
import { DatabaseModule } from '../database/database.module';

describe('ExampleService', () => {
  let exampleService: ExampleService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [DatabaseModule, ExampleServiceModule],
    }).compile();

    exampleService = module.get(ExampleService);
  });

  it('should be defined', () => {
    expect(exampleService).toBeDefined();
  });

  describe('getExamples', () => {
    it('should return examples', async () => {
      // prepare
      await exampleService.createExample('test');

      // act
      const result = await exampleService.getExamples();

      // assert
      expect(result).toBeInstanceOf(Array);
      result.forEach((example) => {
        expect(example).toEqual({
          id: expect.any(Number),
          name: expect.any(String),
        });
      });
    });
  });

  describe('createExample', () => {
    it('should create new example', async () => {
      // act
      const result = await exampleService.createExample('test');

      //assert
      expect(result.name).toBe('test');
    });
  });
});
