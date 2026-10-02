import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { CreateUserUseCase } from './application/use-cases/create-user/create-user.use-case.js';

@Controller({
  version: '1',
  path: 'users',
})
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.createUserUseCase.execute({
      email: dto.email,
      rawPassword: dto.password,
      firstName: dto.firstName,
      lastName: dto.lastName,
    });
  }
}
