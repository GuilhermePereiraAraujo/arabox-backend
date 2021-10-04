import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './model/userToken';
export declare class AuthService {
    private readonly UserService;
    private readonly jwtService;
    constructor(UserService: UserService, jwtService: JwtService);
    login(email: string, senha: string): Promise<UserToken>;
    private validateUser;
}
