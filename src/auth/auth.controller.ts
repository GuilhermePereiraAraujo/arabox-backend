import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './model/LoginRequestBody';

@Controller()
export class AuthController {
    constructor(private readonly service: AuthService) {}
    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() { email, senha }: LoginRequestBody) {
      return this.service.login(email, senha);
    }
}
