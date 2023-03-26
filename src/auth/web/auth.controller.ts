import { Body, Controller, Post } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common/pipes";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { AuthService } from "../service/auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('/singIn')
    singIn(@Body(ValidationPipe) loginUserDto: LoginUserDTO): Promise<string> {
        return this.authService.signIn(loginUserDto);
    }


    @Post('/signup')
    signUp(@Body(ValidationPipe) createUserDto: CreateUserDTO): Promise<void> {
        return this.authService.signUp(createUserDto);
    }

}