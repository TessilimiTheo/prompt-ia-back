import { Test, TestingModule } from '@nestjs/testing';

import { OpenAiApiService } from './open-ai-api.service';

describe('OpenAiApiService', () => {
  let service: OpenAiApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenAiApiService],
    }).compile();

    service = module.get<OpenAiApiService>(OpenAiApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
