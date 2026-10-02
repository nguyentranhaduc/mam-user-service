import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service.js';
import type { UserRepositoryInterface } from '../../../domain/repositories/user.repository.interface.js';
import {UserEntity} from '../../../domain/entities/user.entity.js'

@Injectable()
export class PrismaUserRepository
  extends PrismaService
  implements UserRepositoryInterface
{
  async create(input: UserEntity): Promise<UserEntity> {
    const createdUser = await this.users.create({
      data: {
        email: input.email,
        passwordHash: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
      }, select: {
        id: true,
        email: true,
        passwordHash: false,
        firstName: true,
        lastName: true,
      }
    });

    return new UserEntity({
      id: createdUser.id,
      email: createdUser.email,
      password: input.password,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
    });
  }
}
