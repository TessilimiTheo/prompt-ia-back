import { Test, TestingModule } from '@nestjs/testing';

import { RequestPromptService } from './request-prompt.service';

describe('RequestPromptService', () => {
  let service: RequestPromptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestPromptService],
    }).compile();

    service = module.get<RequestPromptService>(RequestPromptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
