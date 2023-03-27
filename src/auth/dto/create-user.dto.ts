import { IsEmail, IsEmpty, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsNotEmpty({ message: `아이디를 입력해 주세요.` })
    // @Matches(/^[a-z]+[a-z0-9]{5,19}$/g , { message: '아이디는 영어로 입력해 주세요' })
    @MinLength(4, {message: `아이디는 4글자 이상 20글자 이하로 입력해 주세요.`})
    @MaxLength(20, {message: `아이디는 4글자 이상 20글자 이하로 입력해 주세요.`})
    userId: string;
    
    @IsNotEmpty({ message: `비밀번호를 입력해 주세요.` })
    @MinLength(8, { message: '비밀번호는 최소 8글자 이상 입력해 주세요.' })
    @Matches(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/, { message: '비밀번호는 8 ~ 16자 영문, 숫자 조합으로 입력해 주세요' })
    password: string;

    @IsNotEmpty({ message: `이메일을 입력해 주세요.` })
    @IsEmail()
    @MinLength(8, {message: `이메일을 8글자 이상 50글자 이하로 입력해 주세요.`})
    @MaxLength(50, {message: `이메일을 4글자 이상 50글자 이하로 입력해 주세요.`})
    email: string;
    
}