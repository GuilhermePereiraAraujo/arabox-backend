import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, ProfileModule, GameModule, GenreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export class AppModule {}
