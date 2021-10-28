import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
  @IsOptional()
  @IsNumber({}, { each: true })
  genresDisconnectIds?: number[];
  @IsOptional()
  @IsNumber({}, { each: true })
  profilesDisconnectIds?: number[];
}
