import { Harrypotter } from './harrypotter/entities/harrypotter.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HarrypotterModule } from './harrypotter/harrypotter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';
import { ConfigModule } from '@nestjs/config';
import { configService } from './config/configService';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HarrypotterModule,
    TodoModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_DBNAME,
    //   entities: [Harrypotter, Todo],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// 1.47.20.244
