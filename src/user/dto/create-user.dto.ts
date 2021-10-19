import { IsBoolean, IsEmail, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto implements User {
    @IsString()
    name: string;
    @IsString()
    surname: string;
    @IsEmail()
    email: string;
    @IsString()
    cpf: string;
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
      })
    senha: string;
    @IsBoolean()
    isAdmin?: boolean;
}
