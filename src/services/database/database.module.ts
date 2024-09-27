import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'better-sqlite3',
      database: ':memory:',
      entities: [__dirname + '/../entities/*.entity.js'],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
