import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Game[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    update(id: number, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
