import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() user: any) {
    console.log('============================', user);
    return await this.userService.createUser(user);
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }
}
