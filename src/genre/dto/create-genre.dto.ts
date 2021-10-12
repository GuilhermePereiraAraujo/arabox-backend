import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateGameDto } from "src/game/dto/create-game.dto";
import { Genre } from "../entities/genre.entity";


export class CreateGenreDto implements Genre {
    @IsString()
    genreName: string;
    
    @IsOptional()
    @ValidateNested({each : true})
    @Type(() => CreateGameDto)
    games?: CreateGameDto[];

    @IsOptional()
    @IsNumber({}, { each: true })
    gamesIds: number[];
}
