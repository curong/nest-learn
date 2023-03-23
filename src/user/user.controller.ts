import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getUsers() {
        return await this.userService.findUsers();

    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Post(':username')
    findOneUser(@Param('username') username: string, @Body() updateUserDTO: UpdateUserDTO) {
        return this.userService.findOneUser(updateUserDTO);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDTO) {
        await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number) {
        await this.userService.deleteUser(id);
    }



}