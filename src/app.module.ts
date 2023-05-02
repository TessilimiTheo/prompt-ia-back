import * as process from 'process';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './customer/customer.entity';
import { CustomerModule } from './customer/customer.module';
import { OpenAiApiModule } from './open-ai-api/open-ai-api.module';
import { RequestPrompt } from './request-prompt/request-prompt.entity';
import { RequestPromptModule } from './request-prompt/request-prompt.module';

@Module({
  imports: [
    OpenAiApiModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: process.env.ENV === 'production',
      extra:
        process.env.ENV === 'production'
          ? {
              ssl: {
                rejectUnauthorized: false,
              },
            }
          : {},
      entities: [Customer, RequestPrompt],
      synchronize: true,
    }),
    CustomerModule,
    RequestPromptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
