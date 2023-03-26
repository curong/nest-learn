import { CreateUserDTO } from "../dto/create-user.dto";
import { LoginUserDTO } from "../dto/login-user.dto";
import { Auth } from "../entity/auth.entity";

export interface AuthServiceItf {

    signUp(createUserDto: CreateUserDTO);

    signIn(loginUserDto: LoginUserDTO): Promise<Auth>;

}