import { UserEntity } from '../entities/user.entity.js';
import { UserDetailEntity } from '../entities/user-detail.entity.js';

export interface UserRepositoryInterface {
  create(user: UserEntity): Promise<UserEntity>;
  getUserDetailById(id: string): Promise<UserDetailEntity | null>;
}
