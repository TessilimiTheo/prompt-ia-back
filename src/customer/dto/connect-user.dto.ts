import { IsEmail, IsNotEmpty } from 'class-validator';

export class ConnectCustomerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
