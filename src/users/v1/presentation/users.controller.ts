import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { CreateUserUseCase } from '../application/use-cases/create-user/create-user.use-case.js';
import { GetUserDetailByIdUseCase } from '../application/use-cases/get-user-detail-by-id/get-user-detail-by-id.use-case.js';

@Controller({
  version: '1',
  path: 'users',
})
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserDetailByIdUseCase: GetUserDetailByIdUseCase,
  ) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.createUserUseCase.execute({
      email: dto.email,
      rawPassword: dto.password,
      firstName: dto.firstName,
      lastName: dto.lastName,
    });
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.getUserDetailByIdUseCase.execute(id);
  }
}
