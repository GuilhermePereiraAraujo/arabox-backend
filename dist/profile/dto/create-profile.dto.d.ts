import { CreateGameDto } from 'src/game/dto/create-game.dto';
import { Profile } from '../entities/profile.entity';
export declare class CreateProfileDto implements Profile {
    id?: number;
    nickname: string;
    avatarUrl: string;
    userId: number;
    games?: CreateGameDto[];
    gamesIds: number[];
}
