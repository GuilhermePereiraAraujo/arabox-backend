import { Profile } from "src/profile/entities/profile.entity";
export declare class User {
    id?: number;
    name: string;
    surname: string;
    email: string;
    cpf: string;
    profiles?: Profile[];
    senha: string;
    isAdmin?: boolean;
}
