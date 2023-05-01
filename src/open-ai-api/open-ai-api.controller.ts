import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { RequestPromptService } from '../request-prompt/request-prompt.service';

import { CreatePostDto } from './dto/create-post.dto';
import { OpenAiApiService } from './open-ai-api.service';

@Controller('open-ai')
@UsePipes(new ValidationPipe())
export class OpenAiApiController {
  constructor(
    private readonly openApiService: OpenAiApiService,
    private readonly requestPromptService: RequestPromptService,
  ) {}
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.openApiService.GeneratePost(createPostDto).then((data) => {
      this.requestPromptService.SavePrompt(createPostDto);
      return data;
    });
  }
}
