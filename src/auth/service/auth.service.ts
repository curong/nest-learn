import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { Auth } from "../entity/auth.entity";
import { AuthRepository } from "../repository/auth.repository";
import { AuthServiceItf } from "./auth.service-itf";

@Injectable()
export class AuthService implements AuthServiceItf {

    constructor(private readonly authRepository: AuthRepository) { }
    
   

    async signUp(createUserDto: CreateUserDTO): Promise<void> {
        await this.authRepository.signUp(createUserDto);
    }

    async login(loginUserDto: LoginUserDTO): Promise<Auth> {
        throw new Error("Method not implemented.");
    }

}