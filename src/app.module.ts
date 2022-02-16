import { Harrypotter } from './harrypotter/entities/harrypotter.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HarrypotterModule } from './harrypotter/harrypotter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';
import { ConfigModule } from '@nestjs/config';
// import { configService } from './config/configService';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    HarrypotterModule,
    TodoModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'P@ssw0rd',
    //   database: 'flutterapi',
    //   entities: [Harrypotter, Todo],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DBNAME,
      entities: [Harrypotter, Todo],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    // TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// 1.47.20.244
// host    all             all             1.47.20.244/24           md5
// host    all             all             1.47.20.244/24           trust
// host    all             all             1.47.20.244/0           md5
// host    all             all             1.47.20.244/0          trus
