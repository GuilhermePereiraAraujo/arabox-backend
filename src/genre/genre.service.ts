import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  
  constructor(private readonly prisma: PrismaService){}

  create(createGenreDto: CreateGenreDto) {
    const gamesIds = createGenreDto.gamesIds;

    delete createGenreDto.gamesIds;

    const data: Prisma.GenreCreateInput = {
      ...createGenreDto,
      games:{
        create: createGenreDto.games,
        connect: gamesIds?.map((id) => ({id}))
      },
    };

    return this.prisma.genre.create({
      data,
      include: {games: true},
    });
  }

  findAll() {
    return this.prisma.genre.findMany({include: {games: true}});
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: {id},
      include: {games: true},
      });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    const gamesIds = updateGenreDto.gamesIds;
    delete updateGenreDto.gamesIds;
    const gamesDisconnectIds = updateGenreDto.gamesDisconnectIds;
    delete updateGenreDto.gamesDisconnectIds;
    const data = {
      ...updateGenreDto,
      games: {
        connect: gamesIds?.map((id) => ({id})),
        disconnect: gamesDisconnectIds?.map((id) => ({id})),
      },
    };
    return this.prisma.genre.update({
      where: {id},
      data,
      include: {games: true},
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where: {id},
    })
  }
}
