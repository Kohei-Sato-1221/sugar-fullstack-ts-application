import { Module } from '@nestjs/common';
import { UserController } from '../../controller/user.controller';
import { UserInteractor } from './user.interactor';
import { UserRepositoryImpl } from './user.repository.impl';
import { DynamoDBService } from '../../infrastructure/dynamodb.service';

@Module({
  controllers: [UserController],
  providers: [
    UserInteractor,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
    DynamoDBService,
  ],
})
export class UserModule {}
