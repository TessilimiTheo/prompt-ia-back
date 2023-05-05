import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CustomerService } from './customer.service';
import { ConnectCustomerDto } from './dto/connect-user.dto';

@Controller('customer')
@UsePipes(new ValidationPipe())
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async connectUser(@Body() connectCustomerDto: ConnectCustomerDto) {
    const result = await this.customerService.findOneByEmail(
      connectCustomerDto.email,
    );
    if (result == null) {
      return await this.customerService.createUser(connectCustomerDto);
    }
    return result;
  }
}
