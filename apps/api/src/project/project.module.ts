import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credentials } from './entities/credentials.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Credentials])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
