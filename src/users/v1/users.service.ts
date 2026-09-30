import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly database: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);
    const passwordHash = await bcrypt.hash(dto.password, saltRounds);

    return await this.database.users.create({
      data: {
        email: dto.email,
        passwordHash,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });
  }
}
