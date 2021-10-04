import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService){}
  
  create(createGameDto: CreateGameDto) {
    const genreIds = createGameDto.genreIds;
    delete createGameDto.genreIds;
    
    const data = {
      ...createGameDto,
      genres:{
        connect: genreIds?.map((id) =>({id})),
      },
    };
    return this.prisma.game.create({data,});
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: {id},
    });
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    const genreIds = updateGameDto.genreIds;
    delete updateGameDto.genreIds;
    const genresDisconnectIds = updateGameDto.genresDisconnectIds;
    delete updateGameDto.genresDisconnectIds;
    const data = {
      ...updateGameDto,
      genres: {
        connect: genreIds?.map((id) => ({id})),
        disconnect: genresDisconnectIds?.map((id) => ({id})),
      },
    };
    return this.prisma.game.update({
      where: {id},
      data,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: {id},
    });
  }
}
