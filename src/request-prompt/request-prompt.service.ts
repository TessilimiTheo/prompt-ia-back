import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerService } from '../customer/customer.service';
import { CreatePostDto } from '../open-ai-api/dto/create-post.dto';

import { RequestPrompt } from './request-prompt.entity';

@Injectable()
export class RequestPromptService {
  constructor(
    private readonly customerService: CustomerService,
    @InjectRepository(RequestPrompt)
    private RequestPromptRepository: Repository<RequestPrompt>,
  ) {}
  async SavePrompt(createPostDto: CreatePostDto, result: string) {
    const { user, label, ...options } = createPostDto;
    this.customerService.findOneById(user).then(async (customer) => {
      if (customer) {
        await this.RequestPromptRepository.save({
          result,
          customer: customer,
          label,
          options: JSON.stringify(options),
        });
      }
    });
  }

  async findAllById(id: string) {
    return await this.RequestPromptRepository.find({
      relations: ['customer'],
      loadRelationIds: true,
      where: { customer: { id: id } },
      order: { id: 'DESC' },
      take: 7,
    });
  }
}
