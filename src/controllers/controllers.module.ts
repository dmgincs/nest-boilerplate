import { Module } from '@nestjs/common';
import { ExampleControllerModule } from './example/example.module';

@Module({
  imports: [ExampleControllerModule],
})
export class ControllersModule {}
