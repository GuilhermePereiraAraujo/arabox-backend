import { Game } from 'src/game/entities/game.entity';

export class Profile {
  id?: number;
  nickname: string;
  avatarUrl: string;
  userId: number;
  games?: Game[];
}
