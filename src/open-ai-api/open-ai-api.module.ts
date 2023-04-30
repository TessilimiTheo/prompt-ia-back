import { Module } from '@nestjs/common';

import { OpenAiApiController } from './open-ai-api.controller';
import { OpenAiApiService } from './open-ai-api.service';

@Module({
  providers: [OpenAiApiService],
  controllers: [OpenAiApiController],
})
export class OpenAiApiModule {}
