/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';
import { AuthService } from './service/auth.service';
import { AuthController } from './web/auth.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Auth])],
    controllers: [AuthController],
    providers: [
        AuthService,
        AuthRepository
    ],
})
export class AuthModule {}
