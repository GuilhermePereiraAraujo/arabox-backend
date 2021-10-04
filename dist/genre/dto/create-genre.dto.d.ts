import { CreateGameDto } from "src/game/dto/create-game.dto";
import { Genre } from "../entities/genre.entity";
export declare class CreateGenreDto implements Genre {
    genreName: string;
    games?: CreateGameDto[];
    gamesIds: number[];
}
