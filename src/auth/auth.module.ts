/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entity/auth.entity';
import { JwtStrategy } from '../common/jwt/jwt.passport-startegy';
import { AuthRepository } from './repository/auth.repository';
import { AuthService } from './service/auth.service';
import { AuthController } from './web/auth.controller';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '3600s' }
            })
        }),
        TypeOrmModule.forFeature([Auth]),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthRepository, JwtStrategy],
    exports: [JwtStrategy, PassportModule]
})

export class AuthModule { }
