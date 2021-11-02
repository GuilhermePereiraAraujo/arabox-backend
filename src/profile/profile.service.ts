import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService){}
  create(createProfileDto: CreateProfileDto) {
    const userId = createProfileDto.userId;
    delete createProfileDto.userId;
    const gamesIds = createProfileDto.gamesIds;
    delete createProfileDto.gamesIds;

    const data: Prisma.ProfileCreateInput = {
      ...createProfileDto,
      user: {
        connect: {
          id: userId,
        },
      },
      games: {
        connect: gamesIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.profile.create({data});
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: {id},
    });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    const gamesIds = updateProfileDto.gamesIds;
    delete updateProfileDto.gamesIds;
    const gamesDisconnectIds = updateProfileDto.gamesDisconnectIds;
    delete updateProfileDto.gamesDisconnectIds;
    const data: Prisma.ProfileUpdateInput = {
      ...updateProfileDto,
      games: {
        connect: gamesIds?.map((id) => ({ id })),
        disconnect: gamesDisconnectIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.profile.update({
      where: {id},
      data,
    });
  }

  remove(id: number) {
    return this.prisma.profile.delete({
      where: {id},
    });
  }
}
