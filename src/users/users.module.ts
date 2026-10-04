import { Module } from '@nestjs/common';
import { UsersController } from './v1/users.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { PrismaUserRepository } from './v1/infrastructure/database/prisma/prisma-user-repository.infra.js';
import { PASSWORD_HASHER, USER_REPOSITORY } from './v1/tokens.js';
import { BcryptPasswordHasher } from './v1/infrastructure/password-hasher/bcrypt-password-hasher.infra.js';
import { CreateUserUseCase } from './v1/application/use-cases/create-user/create-user.use-case.js';
import { GetUserDetailByIdUseCase } from './v1/application/use-cases/get-user-detail-by-id/get-user-detail-by-id.use-case.js';
import { UserRepositoryInterface } from './v1/domain/repositories/user.repository.interface.js';
import { PasswordHasherInterface } from './v1/application/password-hasher.interface.js';

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
        userRepository: UserRepositoryInterface,
        passwordHasher: PasswordHasherInterface,
      ) => {
        return new CreateUserUseCase(userRepository, passwordHasher);
      },
      inject: [USER_REPOSITORY, PASSWORD_HASHER], // Injecting the domain abstractions
    },
    {
      provide: GetUserDetailByIdUseCase, // Application
      useFactory: (userRepository: UserRepositoryInterface) => {
        return new GetUserDetailByIdUseCase(userRepository);
      },
      inject: [USER_REPOSITORY], // Injecting the domain abstractions
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
