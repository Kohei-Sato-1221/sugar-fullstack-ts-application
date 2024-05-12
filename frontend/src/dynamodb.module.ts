import { Module } from '@nestjs/common';
import { DynamoDBController } from './dynamodb.controller';
import { DynamoDBService } from './dynamodb.service';

@Module({
  imports: [],
  controllers: [DynamoDBController],
  providers: [DynamoDBService],
  exports: [DynamoDBService],
})
export class DynamoDBModule {}
