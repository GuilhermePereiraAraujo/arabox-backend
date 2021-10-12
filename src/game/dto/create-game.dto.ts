import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, IsUrl, ValidateNested } from "class-validator";
import { CreateGenreDto } from "src/genre/dto/create-genre.dto";
import { Game } from "../entities/game.entity";

export class CreateGameDto implements Game{
    @IsString()
    title: string;
    
    @IsUrl()
    imageUrl?: string;
    
    @IsString()
    description: string;
    
    @IsNumber()
    year: number;

    @IsNumber()
    imdbScore: number;

    @IsUrl({
        require_protocol: true,
    })
    ytTrailerLink: string;

    @IsUrl({
        require_protocol: true,
    })
    gameplayLink: string;
    
    @IsOptional()
    @ValidateNested({each : true})
    @Type(() => CreateGenreDto)
    @IsArray()
    genres?: CreateGenreDto[];

    @IsOptional()
    @IsNumber({}, { each: true })
    genreIds?: number[];
}
