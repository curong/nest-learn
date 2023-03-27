import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common/pipes";
import { AuthGuard } from "@nestjs/passport";
import { UserAuthentication } from "src/common/jwt/decorator/auth.decorator";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { Auth } from "../entity/auth.entity";
import { AuthService } from "../service/auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('/signin')
    singIn(@Body(ValidationPipe) loginUserDto: LoginUserDTO): Promise<{ accessToken: string }> {
        return this.authService.signIn(loginUserDto);
    }


    @Post('/signup')
    signUp(@Body(ValidationPipe) createUserDto: CreateUserDTO): Promise<void> {
        return this.authService.signUp(createUserDto);
    }

    @Post('/jwt-test')
    @UseGuards(AuthGuard())
    test(@UserAuthentication() auth: Auth) {
        console.log('auth : ', auth)
    }

}