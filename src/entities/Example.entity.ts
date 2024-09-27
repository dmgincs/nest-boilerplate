import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('examples')
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
