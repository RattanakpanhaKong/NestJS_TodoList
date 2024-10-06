import { NestFactory } from '@nestjs/core';
// import { Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { AtGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({origin:'http://localhost:4200', credentials: true})

  // const reflector = new Reflector();
  // app.useGlobalGuards(new AtGuard(reflector)); // apply AtGuard to all route in application
  
  await app.listen(3000);
}
bootstrap();
