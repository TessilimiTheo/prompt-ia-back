import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerModule } from '../customer/customer.module';

import { RequestPromptController } from './request-prompt.controller';
import { RequestPrompt } from './request-prompt.entity';
import { RequestPromptService } from './request-prompt.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequestPrompt]), CustomerModule],
  providers: [RequestPromptService],
  exports: [RequestPromptService],
  controllers: [RequestPromptController],
})
export class RequestPromptModule {}
