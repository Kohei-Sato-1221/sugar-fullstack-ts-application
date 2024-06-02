import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

@Injectable()
export class UserService {
  dynamoDBClient: DynamoDBDocumentClient;

  constructor() {
    const ddbClient: DynamoDBClient = new DynamoDBClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    this.dynamoDBClient = DynamoDBDocumentClient.from(ddbClient);
  }

  async getItem(userId: string) {
    const params = {
      TableName: 'Users',
      Key: {
        Id: userId,
      },
    };
    try {
      const data = await this.dynamoDBClient.send(new GetCommand(params));
      return data.Item;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
