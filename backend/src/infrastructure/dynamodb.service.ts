import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { UserEntity, convertToEntity } from '../feature/user/user.entity';

@Injectable()
export class DynamoDBService {
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

  async getItem(getItemParams: GetItemParams): Promise<UserEntity> {
    const params = {
      TableName: getItemParams.TableName,
      Key: Object.fromEntries(getItemParams.KeyValue),
    };
    try {
      const data = await this.dynamoDBClient.send(new GetCommand(params));
      return convertToEntity(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export type GetItemParams = {
  TableName: string;
  KeyValue: Map<string, string>;
};
