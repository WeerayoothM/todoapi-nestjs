// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Harrypotter } from 'src/harrypotter/entities/harrypotter.entity';
import { Todo } from 'src/todo/entities/todo.entity';
import * as dotenv from 'dotenv';
dotenv.config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    console.log('Hello');

    console.log(this.getValue('DATABASE_HOST'));
    console.log(this.getValue('DATABASE_USER'));
    console.log(this.getValue('DATABASE_PASSWORD'));
    console.log(this.getValue('DATABASE_DBNAME'));

    return {
      type: 'postgres',

      host: this.getValue('DATABASE_HOST'),
      port: parseInt(this.getValue('DATABASE_PORT')),
      username: this.getValue('DATABASE_USER'),
      password: this.getValue('DATABASE_PASSWORD'),
      database: this.getValue('DATABASE_DBNAME'),

      entities: [Harrypotter, Todo],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DATABASE_HOST',
  'DATABASE_PORT',
  'DATABASE_USER',
  'DATABASE_PASSWORD',
  'DATABASE_DBNAME',
]);

export { configService };
