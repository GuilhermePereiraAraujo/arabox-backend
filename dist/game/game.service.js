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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GameService = class GameService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createGameDto) {
        const genreIds = createGameDto.genreIds;
        delete createGameDto.genreIds;
        const data = Object.assign(Object.assign({}, createGameDto), { genres: {
                connect: genreIds === null || genreIds === void 0 ? void 0 : genreIds.map((id) => ({ id })),
            } });
        return this.prisma.game.create({ data });
    }
    findAll() {
        return this.prisma.game.findMany();
    }
    findOne(id) {
        return this.prisma.game.findUnique({
            where: { id },
        });
    }
    update(id, updateGameDto) {
        const genreIds = updateGameDto.genreIds;
        delete updateGameDto.genreIds;
        const genresDisconnectIds = updateGameDto.genresDisconnectIds;
        delete updateGameDto.genresDisconnectIds;
        const profilesIds = updateGameDto.profilesIds;
        delete updateGameDto.profilesIds;
        const profilesDisconnectIds = updateGameDto.profilesDisconnectIds;
        delete updateGameDto.profilesDisconnectIds;
        const data = Object.assign(Object.assign({}, updateGameDto), { profiles: {
                connect: profilesIds === null || profilesIds === void 0 ? void 0 : profilesIds.map((id) => ({ id })),
                disconnect: profilesDisconnectIds === null || profilesDisconnectIds === void 0 ? void 0 : profilesDisconnectIds.map((id) => ({ id })),
            }, genres: {
                connect: genreIds === null || genreIds === void 0 ? void 0 : genreIds.map((id) => ({ id })),
                disconnect: genresDisconnectIds === null || genresDisconnectIds === void 0 ? void 0 : genresDisconnectIds.map((id) => ({ id })),
            } });
        return this.prisma.game.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.game.delete({
            where: { id },
        });
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map