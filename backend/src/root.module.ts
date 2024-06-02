import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './feature/user/user.service';
import { UserRepository } from './feature/user/user.repository';
import { DynamoDBService } from './infrastructure/dynamodb.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository, DynamoDBService],
  exports: [UserService],
})
export class RootModule {}
