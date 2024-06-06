import { Controller, Get, Param } from '@nestjs/common';
import { UserInteractor } from '../feature/user/user.interactor';

@Controller('user')
export class UserController {
  constructor(private readonly userInteractor: UserInteractor) {}

  @Get('/')
  root(): string {
    return 'this is user dynamodb root endpoint';
  }

  @Get('/:userId')
  async getUser(@Param('userId') userId: string): Promise<Record<string, any>> {
    return this.userInteractor.getUser(userId);
  }
}
