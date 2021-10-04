import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Game[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    update(id: string, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
