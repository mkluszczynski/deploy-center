import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  username: string;

  @Column({ type: 'text' })
  privateKey: string;

  @Column({ type: 'text' })
  publicKey: string;

  @OneToOne(() => Project, (project) => project.credentials)
  project: Project;
}
