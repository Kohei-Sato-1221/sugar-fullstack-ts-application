import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { convertToDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async getUser(userId: string) {
    try {
      const userEntity: UserEntity = await this.repository.getUser(userId);
      return convertToDto(userEntity);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  //TODO 更新時はTransactionを使う
  //ref:https://dev.classmethod.jp/articles/dynamodb-optimistic-locking/
}
