import { Controller, Get, Param } from '@nestjs/common';

import { RequestPromptService } from './request-prompt.service';

@Controller('prompt')
export class RequestPromptController {
  constructor(private readonly requestPromptService: RequestPromptService) {}
  @Get(':id')
  async findAllById(@Param('id') id: string) {
    return await this.requestPromptService.findAllById(id);
  }
}
