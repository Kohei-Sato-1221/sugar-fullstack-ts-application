import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { convertToDto } from './user.dto';
import { DynamoDBService, GetItemParams } from '../dynamodb.service';

@Injectable()
export class UserService {
  constructor(private dynamoDBService: DynamoDBService) {}

  async getUser(userId: string) {
    const params: GetItemParams = {
      TableName: 'Users',
      KeyValue: new Map<string, string>([['Id', userId]]),
    };
    try {
      const userEntity: UserEntity = await this.dynamoDBService.getItem(params);
      return convertToDto(userEntity);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
