"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const profile_module_1 = require("./profile/profile.module");
const game_module_1 = require("./game/game.module");
const genre_module_1 = require("./genre/genre.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, prisma_module_1.PrismaModule, profile_module_1.ProfileModule, game_module_1.GameModule, genre_module_1.GenreModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map