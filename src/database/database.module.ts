import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import {DATABASE} from './database.token.js'

@Module({
  providers: [
    PrismaService,
    {
      provide: DATABASE,
      useExisting: PrismaService,
    },
  ],
  exports: [DATABASE],
})
export class DatabaseModule {}