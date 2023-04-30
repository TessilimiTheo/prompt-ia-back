import { Test, TestingModule } from '@nestjs/testing';

import { OpenAiApiController } from './open-ai-api.controller';
import { OpenAiApiService } from './open-ai-api.service';

describe('OpenAiApiController', () => {
  let controller: OpenAiApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenAiApiController],
      providers: [OpenAiApiService],
    }).compile();

    controller = module.get<OpenAiApiController>(OpenAiApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
