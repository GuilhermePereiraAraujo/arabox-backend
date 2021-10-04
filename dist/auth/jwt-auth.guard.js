"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const user_service_1 = require("../user/user.service");
const public_decorator_1 = require("./public.decorator");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector, userService) {
        super();
        this.reflector = reflector;
        this.userService = userService;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const canActivate = super.canActivate(context);
        if (typeof canActivate === 'boolean') {
            return canActivate;
        }
        return (0, rxjs_1.of)(canActivate).pipe((0, operators_1.mergeMap)((value) => value), (0, operators_1.takeWhile)((value) => value), (0, operators_1.map)(() => context.switchToHttp().getRequest()), (0, operators_1.mergeMap)((request) => (0, rxjs_1.of)(request).pipe((0, operators_1.map)((req) => {
            if (!req.user) {
                throw Error('User was not found in request.');
            }
            return req.user;
        }), (0, operators_1.mergeMap)((userFromJwt) => this.userService.findById(userFromJwt.id)), (0, operators_1.tap)((user) => {
            request.principal = user;
        }))), (0, operators_1.map)((user) => Boolean(user)));
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(user_service_1.UserService)),
    __metadata("design:paramtypes", [core_1.Reflector,
        user_service_1.UserService])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map