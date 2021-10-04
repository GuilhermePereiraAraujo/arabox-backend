import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
