import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { OpenAiApiService } from './open-ai-api.service';

@Controller('open-ai')
@UsePipes(new ValidationPipe())
export class OpenAiApiController {
  constructor(private readonly openApiService: OpenAiApiService) {}
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.openApiService.GeneratePost(createPostDto);
  }
}
