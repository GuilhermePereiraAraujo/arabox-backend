import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGenreDto: CreateGenreDto): Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    })[]>;
    findOne(id: number): Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    }>;
    update(id: number, updateGenreDto: UpdateGenreDto): Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        games: import(".prisma/client").Game[];
    }>;
    remove(id: number): Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}
