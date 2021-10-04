import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnauthorizedInterceptor } from './interceptors/unautorized.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist : true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(
    new UnauthorizedInterceptor()
  )
  await app.listen(3000);
}
bootstrap();
