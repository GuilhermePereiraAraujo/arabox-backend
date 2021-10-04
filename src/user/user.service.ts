import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Public } from 'src/auth/public.decorator';

@Injectable()
export class UserService {
  
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      senha: await bcrypt.hash(createUserDto.senha, 10),
    };
    
    const createdUser = await this.prisma.user.create({data});

    return {
      ...createdUser,
      senha: undefined,
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findById(id: number) {
    return  this.prisma.user.findUnique({ where: { id } });
  }

  findByEmail(email: string){
    return   this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {id},
      data:  updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({where: {id}});
  }
}
