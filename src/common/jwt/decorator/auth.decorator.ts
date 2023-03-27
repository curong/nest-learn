import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Auth } from "src/auth/entity/auth.entity";

export const UserAuthentication = createParamDecorator((data, ctx: ExecutionContext): Auth => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})