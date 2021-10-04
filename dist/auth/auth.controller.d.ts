import { AuthService } from './auth.service';
import { LoginRequestBody } from './model/LoginRequestBody';
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    login({ email, senha }: LoginRequestBody): Promise<import("./model/userToken").UserToken>;
}
