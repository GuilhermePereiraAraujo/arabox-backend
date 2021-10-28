import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateGameDto } from 'src/game/dto/create-game.dto';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto implements Profile {
  id?: number;

  @IsString()
  nickname: string;

  @IsUrl({
    require_protocol: true,
  })
  avatarUrl: string;

  @IsInt()
  userId: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateGameDto)
  @IsArray()
  games?: CreateGameDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  gamesIds?: number[];
}
