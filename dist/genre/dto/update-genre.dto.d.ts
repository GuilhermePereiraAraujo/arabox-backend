import { CreateGenreDto } from './create-genre.dto';
declare const UpdateGenreDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateGenreDto>>;
export declare class UpdateGenreDto extends UpdateGenreDto_base {
    gamesDisconnectIds?: number[];
}
export {};
