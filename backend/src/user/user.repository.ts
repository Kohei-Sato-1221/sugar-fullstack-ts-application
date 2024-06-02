import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { DynamoDBService, GetItemParams } from '../dynamodb.service';

@Injectable()
export class UserRepository {
  constructor(private dynamoDBService: DynamoDBService) {}

  async getUser(userId: string): Promise<UserEntity> {
    const params: GetItemParams = {
      TableName: 'Users',
      KeyValue: new Map<string, string>([['Id', userId]]),
    };
    try {
      return await this.dynamoDBService.getItem(params);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}