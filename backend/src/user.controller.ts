import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  root(): string {
    return 'this is user dynamodb root endpoint';
  }

  @Get('user/:userId')
  async getItems(
    @Param('userId') userId: string,
  ): Promise<Record<string, any>> {
    return this.userService.getItem(userId);
  }
}
