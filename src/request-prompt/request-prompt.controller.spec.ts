import { Test, TestingModule } from '@nestjs/testing';
import { RequestPromptController } from './request-prompt.controller';

describe('RequestPromptController', () => {
  let controller: RequestPromptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestPromptController],
    }).compile();

    controller = module.get<RequestPromptController>(RequestPromptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
