import { Body, Controller, Post } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common/pipes";
import { CreateUserDTO } from "../dto/create-user.dto";
import { AuthService } from "../service/auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) createUserDto: CreateUserDTO): Promise<void> {
        return this.authService.signUp(createUserDto);
    }

}