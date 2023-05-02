import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Customer } from '../customer/customer.entity';

@Entity()
export class RequestPrompt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ type: 'jsonb' })
  options: string;

  @Column()
  result: string;

  @ManyToOne(() => Customer)
  customer: Customer;
}
