import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('user')],
  controllers: [UserController],
})
export class UserModule {}
