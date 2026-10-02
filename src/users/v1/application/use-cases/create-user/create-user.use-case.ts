import { UserRepositoryInterface } from '../../../domain/repositories/user.repository.interface.js';
import { CreateUserInputInterface } from './create-user.input.interface.js';
import { CreateUserOutputInterface } from './create-user.output.interface.js';
import { PasswordHasherInterface } from '../../password-hasher.interface.js';
import { UserEntity } from '../../../domain/entities/user.entity.js';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepositoryInterface,
    private readonly passwordHasher: PasswordHasherInterface,
  ) {}

  async execute(
    input: CreateUserInputInterface,
  ): Promise<CreateUserOutputInterface> {
    const hashedPassword = await this.passwordHasher.hash(input.rawPassword);
    const userEntity = new UserEntity({
      email: input.email,
      password: hashedPassword,
      firstName: input.firstName,
      lastName: input.lastName,
    });

    const createdUserEntity = await this.userRepository.create(userEntity);

    if (!createdUserEntity.id) {
      throw new Error('User ID was not generated');
    }

    return {
      id: createdUserEntity.id,
      email: createdUserEntity.email,
      firstName: createdUserEntity.firstName,
      lastName: createdUserEntity.lastName,
    };
  }
}
