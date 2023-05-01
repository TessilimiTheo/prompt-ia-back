import { Module } from '@nestjs/common';

import { CustomerModule } from '../customer/customer.module';
import { RequestPromptModule } from '../request-prompt/request-prompt.module';

import { OpenAiApiController } from './open-ai-api.controller';
import { OpenAiApiService } from './open-ai-api.service';

@Module({
  providers: [OpenAiApiService],
  controllers: [OpenAiApiController],
  imports: [CustomerModule, RequestPromptModule],
})
export class OpenAiApiModule {}
