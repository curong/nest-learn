import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../dto/create-user.dto";
import { Auth } from "../entity/auth.entity";

@Injectable()
export class AuthRepository {

    constructor(@InjectRepository(Auth) private authRepository: Repository<Auth>) { }

    async signUp(createUserDto: CreateUserDTO): Promise<void> {
        const { userId, password, email } = { ...createUserDto };
        const newUser = this.authRepository.create({ userId, password, email, });

        try {
            await this.authRepository.save(newUser);
        } catch (error) {
            
            if(error.code === '23505') {
                throw new ConflictException(`이미 존재하는 아이디 입니다.`);
            } else {
                throw new InternalServerErrorException();
            }
        }

    }




}