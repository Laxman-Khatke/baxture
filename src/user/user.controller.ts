import { UpdateUserDto } from './userDto/update-user-dto';
import { UserSchema } from './UserSchemas/user.schema';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CreateUserDto } from './userDto/create-user.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';


@Controller('/api/user')
export class UserController {
  constructor(private userService: InMemoryDBService<UserSchema>) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    const user = this.userService.create(createUser);
    if (!user) {
      return 'Error in creating user';
    }
    return 'User created successfully';
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    body.id = id;
    this.userService.update(body);
    return 'User updated successfully';
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.userService.delete(id);
    return 'User deleted successfully';
  }

  @Get()
  getAllUser() {
    return this.userService.getAll();
  }

  @Get(':id')
  getUserByID(@Param('id') id: string) {
    const userData = this.userService.get(id);
    if (!userData) {
      return 'User not Found';
    }
    return userData;
  }
}
