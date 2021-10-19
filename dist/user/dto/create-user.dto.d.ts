import { User } from "../entities/user.entity";
export declare class CreateUserDto implements User {
    name: string;
    surname: string;
    email: string;
    cpf: string;
    senha: string;
    isAdmin?: boolean;
}
