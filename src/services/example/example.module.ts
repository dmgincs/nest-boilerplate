import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from '~/entities/Example.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  providers: [ExampleService],
  exports: [ExampleService],
})
export class ExampleServiceModule {}
