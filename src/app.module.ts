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
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'prompt-ia',
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
