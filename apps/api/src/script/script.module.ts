import { Module } from '@nestjs/common';
import { ScriptController } from './script.controller';
import { ScriptService } from './script.service';
import { Script } from 'vm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Script])],
  controllers: [ScriptController],
  providers: [ScriptService],
})
export class ScriptModule {}
