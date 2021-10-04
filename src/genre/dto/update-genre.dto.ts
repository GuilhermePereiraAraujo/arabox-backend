import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateGenreDto } from './create-genre.dto';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
    @IsOptional()
    @IsNumber({}, { each: true })
    gamesDisconnectIds?: number[];
}
