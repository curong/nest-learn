import { IsEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUserDTO {

    @IsEmpty({ message: `아이디를 입력해 주세요.` })
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    userId: string;

    @IsEmpty({ message: `비밀번호를 입력해 주세요.` })
    @MinLength(8, { message: '비밀번호는 최소 8글자 이상 입력해 주세요.' })
    @Matches(/^[a-zA-Z0]*$/, { message: '비밀번호는 영어로 입력해 주세요' })
    password: string;

}