import { UserEntity } from "../entities/user.entity.js";

export interface UserRepositoryInterface {
  create(user: UserEntity): Promise<UserEntity>;
}