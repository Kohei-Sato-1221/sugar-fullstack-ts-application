import { Injectable } from '@nestjs/common';
import { DynamoDBService, GetItemParams } from './dynamodb.service';

@Injectable()
export class UserService {
  constructor(private dynamoDBService: DynamoDBService) {}

  async getUser(userId: string) {
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
