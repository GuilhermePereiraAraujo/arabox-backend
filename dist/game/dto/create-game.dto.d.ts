import { CreateGenreDto } from "src/genre/dto/create-genre.dto";
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { Game } from '../entities/game.entity';
export declare class CreateGameDto implements Game {
    title: string;
    imageUrl?: string;
    description: string;
    year: number;
    imdbScore: number;
    ytTrailerLink: string;
    gameplayLink: string;
    genres?: CreateGenreDto[];
    genreIds?: number[];
    profiles?: CreateProfileDto[];
    profilesIds: number[];
}
