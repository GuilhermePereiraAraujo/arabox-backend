import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        senha: any;
        id: number;
        name: string;
        surname: string;
        email: string;
        cpf: string;
        avatarUrl: string;
        isAdmin: boolean;
    }>;
    findUser(user: User): {
        user: User;
    };
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
