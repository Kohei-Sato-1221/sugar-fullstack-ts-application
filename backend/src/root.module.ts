import { Module } from '@nestjs/common';
import { UserModule } from './feature/user/user.module';

@Module({
  imports: [UserModule],
})
export class RootModule {}
