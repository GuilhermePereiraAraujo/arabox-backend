import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService){}
  create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      ...createProfileDto,
      user: {
        connect: {
          id: createProfileDto.userId,
        },
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
    return this.prisma.profile.update({
      where: {id},
      data: updateProfileDto,
    })
  }

  remove(id: number) {
    return this.prisma.profile.delete({
      where: {id},
    });
  }
}
