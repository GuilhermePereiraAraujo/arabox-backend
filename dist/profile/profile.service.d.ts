import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProfileDto: CreateProfileDto): Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: number): Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    update(id: number, updateProfileDto: UpdateProfileDto): Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    remove(id: number): Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
}
