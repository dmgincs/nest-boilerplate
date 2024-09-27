import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleServiceModule } from '~/services/example/example.module';

@Module({
  imports: [ExampleServiceModule],
  controllers: [ExampleController],
})
export class ExampleControllerModule {}
