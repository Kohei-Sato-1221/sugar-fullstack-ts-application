import { UserEntity } from './user.entity';

export interface UserRepository {
  getUser(userId: string): Promise<UserEntity>;
}
