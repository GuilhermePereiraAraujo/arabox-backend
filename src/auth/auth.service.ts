import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/User/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from 'src/error/unautorized.error';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './model/userToken';
import { Userpayload } from './model/userpayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserService: UserService,
    private readonly jwtService: JwtService,
      ) {}

  async login(email: string, senha: string): Promise<UserToken> {
    const User: User = await this.validateUser(email, senha);

    const payload : Userpayload = {
        username: User.email,
        sub: User.id,
    };

    return { accessToken: this.jwtService.sign(payload) };
    // Validar o usuário
    // TODO: Montar o payload
    // TODO: Transformar o payload em um JWT
  }

  private async validateUser(email: string, senha: string) {
    const User = await this.UserService.findByEmail(email);

    if(User){
        const isPasswordValid = await bcrypt.compare(senha, User.senha);
        
        if(isPasswordValid){
            return{
                ...User,
                senha: undefined,
            };
        }
    }

    throw new UnauthorizedError('Email e/ou senha fornecidos são incorretos');
  }
}
