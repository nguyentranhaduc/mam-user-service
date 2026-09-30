import { Module } from '@nestjs/common';
import { UsersService } from './v1/users.service.js';
import { UsersController } from './v1/users.controller.js';
import { DatabaseModule } from '../database/database.module.js';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
