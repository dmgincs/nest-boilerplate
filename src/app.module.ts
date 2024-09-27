import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { DatabaseModule } from './services/database/database.module';

@Module({
  imports: [DatabaseModule, ControllersModule],
})
export class AppModule {}
