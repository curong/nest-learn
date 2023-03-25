import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { Auth } from "../entity/auth.entity";
import { AuthRepository } from "../repository/auth.repository";
import { AuthServiceItf } from "./auth.service-itf";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService implements AuthServiceItf {

    constructor(private readonly authRepository: AuthRepository) { }



    async signUp(createUserDto: CreateUserDTO): Promise<void> {
        const { userId, password, email } = { ...createUserDto }
        const salt = await bcrypt.getSalt();
        const hashedPasswpaord = await bcrypt.hash(password, salt);

        await this.authRepository.signUp({ userId, password: hashedPasswpaord, email });
    }

    async login(loginUserDto: LoginUserDTO): Promise<Auth> {
        throw new Error("Method not implemented.");
    }

}