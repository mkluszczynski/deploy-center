import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Script {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  commands: string;
}
