import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { AuthRepository } from "../repository/auth.repository";

@Injectable()
export class AuthService {

    constructor(
        private readonly authRepository: AuthRepository,
    ) { }

    async signUp(createUserDto: CreateUserDTO): Promise<void> {
        const { userId, password, email } = createUserDto;

        const salt = await bcrypt.genSalt(10);
        const hashedPasswpaord = await bcrypt.hash(password, salt);
        await this.authRepository.signUp({ userId, password: hashedPasswpaord, email });
    }

    signIn(loginUserDto: LoginUserDTO): Promise<{ accessToken: string }> {
        return this.authRepository.signIn(loginUserDto);
    }



}