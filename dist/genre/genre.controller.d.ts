import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    }>;
    update(id: string, updateGenreDto: UpdateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}
