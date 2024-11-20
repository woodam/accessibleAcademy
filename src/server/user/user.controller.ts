import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "@server/user/dto/createUser.dto";

import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("signup")
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
