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
exports.CreateGameDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_genre_dto_1 = require("../../genre/dto/create-genre.dto");
const create_profile_dto_1 = require("../../profile/dto/create-profile.dto");
class CreateGameDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "imageUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "imdbScore", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "ytTrailerLink", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "gameplayLink", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_genre_dto_1.CreateGenreDto),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateGameDto.prototype, "genres", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateGameDto.prototype, "genreIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_profile_dto_1.CreateProfileDto),
    __metadata("design:type", Array)
], CreateGameDto.prototype, "profiles", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateGameDto.prototype, "profilesIds", void 0);
exports.CreateGameDto = CreateGameDto;
//# sourceMappingURL=create-game.dto.js.map