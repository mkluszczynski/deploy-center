import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { ScriptModule } from './script/script.module';
import { Project } from './project/entities/project.entity';
import { Script } from 'vm';
import { Credentials } from './project/entities/credentials.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'root',
      database: 'deploy-center',
      entities: [Project, Script, Credentials],
    }),
    ProjectModule,
    ScriptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
