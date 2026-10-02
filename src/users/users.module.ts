import { Module } from '@nestjs/common';
import { UsersController } from './v1/users.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { PrismaUserRepository } from './v1/infrastructure/database/prisma/prisma-user-repository.infra.js';
import { PASSWORD_HASHER, USER_REPOSITORY } from './v1/tokens.js';
import { CreateUserUseCase } from './v1/application/use-cases/create-user/create-user.use-case.js';
import { BcryptPasswordHasher } from './v1/infrastructure/password-hasher/bcrypt-password-hasher.infra.js';

@Module({
  imports: [PrismaModule],
  providers: [
    BcryptPasswordHasher, // Infrastructure implementation
    PrismaUserRepository, // Infrastructure implementation
    {
      provide: PASSWORD_HASHER, // Domain abstraction → Infrastructure implementation
      useExisting: BcryptPasswordHasher,
    },
    {
      provide: USER_REPOSITORY, // Domain abstraction → Infrastructure implementation
      useExisting: PrismaUserRepository,
    },
    {
      provide: CreateUserUseCase, // Application
      useFactory: (
        userRepository: PrismaUserRepository,
        bcryptPasswordHasher: BcryptPasswordHasher,
      ) => {
        return new CreateUserUseCase(userRepository, bcryptPasswordHasher);
      },
      inject: [USER_REPOSITORY, PASSWORD_HASHER], // Injecting the domain abstractions
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
