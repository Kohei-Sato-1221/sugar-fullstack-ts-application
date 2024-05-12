import { Controller, Get, Param } from '@nestjs/common';
import { DynamoDBService } from './dynamodb.service';

@Controller('dynamodb')
export class DynamoDBController {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  @Get('user')
  root(): string {
    return 'this is user dynamodb root endpoint';
  }

  @Get('user/:userId')
  async getItems(
    @Param('userId') userId: string,
  ): Promise<Record<string, any>> {
    return this.dynamoDBService.getItem(userId);
  }
}
