import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { Auth } from "../../auth/entity/auth.entity";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(Auth) private authRepository: Repository<Auth>,
    ) {
        super(
            {
                secretOrKey: process.env.JWT_SECRET,
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            });
    }


    async validate(payload) {
        const { userId } = payload;
        const auth: Auth = await this.authRepository.findOneBy({ userId })

        if (!auth) {
            throw new UnauthorizedException();
        }

        return auth;

    }
}