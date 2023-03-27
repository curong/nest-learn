import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { Auth } from "../entity/auth.entity";

@Injectable()
export class AuthRepository {

    constructor(
        @InjectRepository(Auth) private authRepository: Repository<Auth>,
        private jwtService: JwtService
    ) { }

    async signUp(createUserDto: CreateUserDTO): Promise<void> {
        const { userId, password, email } = createUserDto;
        const newUser = this.authRepository.create({ userId, password, email, });

        try {
            await this.authRepository.save(newUser);
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException(`이미 존재하는 아이디 입니다.`);
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(loginUserDto: LoginUserDTO): Promise<{ accessToken: string }> {
        const { userId, password } = loginUserDto;
        const user = await this.authRepository.findOneBy({ userId });
        const compare = await bcrypt.compare(password, user.password)

        // 유저 토큰 생성 ( Secret + Payload )
        if (user && compare) {
            const payload = { userId };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        } else {
            throw new UnauthorizedException(`login failed`);
        }

    }




}