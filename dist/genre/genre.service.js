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
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GenreService = class GenreService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createGenreDto) {
        const gamesIds = createGenreDto.gamesIds;
        delete createGenreDto.gamesIds;
        const data = Object.assign(Object.assign({}, createGenreDto), { games: {
                create: createGenreDto.games,
                connect: gamesIds === null || gamesIds === void 0 ? void 0 : gamesIds.map((id) => ({ id }))
            } });
        return this.prisma.genre.create({
            data,
            include: { games: true },
        });
    }
    findAll() {
        return this.prisma.genre.findMany({ include: { games: true } });
    }
    findOne(id) {
        return this.prisma.genre.findUnique({
            where: { id },
            include: { games: true },
        });
    }
    update(id, updateGenreDto) {
        const gamesIds = updateGenreDto.gamesIds;
        delete updateGenreDto.gamesIds;
        const gamesDisconnectIds = updateGenreDto.gamesDisconnectIds;
        delete updateGenreDto.gamesDisconnectIds;
        const data = Object.assign(Object.assign({}, updateGenreDto), { games: {
                connect: gamesIds === null || gamesIds === void 0 ? void 0 : gamesIds.map((id) => ({ id })),
                disconnect: gamesDisconnectIds === null || gamesDisconnectIds === void 0 ? void 0 : gamesDisconnectIds.map((id) => ({ id })),
            } });
        return this.prisma.genre.update({
            where: { id },
            data,
            include: { games: true },
        });
    }
    remove(id) {
        return this.prisma.genre.delete({
            where: { id },
        });
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map