import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DynamoDBService } from './dynamodb.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, DynamoDBService],
  exports: [UserService],
})
export class RootModule {}
