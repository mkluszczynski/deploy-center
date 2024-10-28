import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Credentials } from './credentials.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  host: string;

  @OneToOne(() => Credentials, (credentials) => credentials.project)
  credentials: Credentials;
}
