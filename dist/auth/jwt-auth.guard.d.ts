import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../user/user.service';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private reflector;
    private readonly userService;
    constructor(reflector: Reflector, userService: UserService);
    canActivate(context: ExecutionContext): boolean | import("rxjs").Observable<boolean>;
}
export {};
