import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Example } from '~/entities/Example.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
  ) {}

  getExamples(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  async createExample(name: string): Promise<Example> {
    const example = this.exampleRepository.create({
      name,
    });

    await this.exampleRepository.insert(example);
    return example;
  }
}
