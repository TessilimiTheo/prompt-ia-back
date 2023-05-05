import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from './customer.entity';
import { ConnectCustomerDto } from './dto/connect-user.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  public async findOneByEmail(email: string) {
    return await this.customerRepository.findOne({ where: { email } });
  }

  async createUser(connectCustomerDto: ConnectCustomerDto) {
    return await this.customerRepository.save(connectCustomerDto);
  }

  async findOneById(id: string) {
    return await this.customerRepository.findOneBy({ id });
  }
}
