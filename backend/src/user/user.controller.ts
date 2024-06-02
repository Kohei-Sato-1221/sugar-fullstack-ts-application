import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  root(): string {
    return 'this is user dynamodb root endpoint';
  }

  @Get('/:userId')
  async getUser(@Param('userId') userId: string): Promise<Record<string, any>> {
    return this.userService.getUser(userId);
  }
}
