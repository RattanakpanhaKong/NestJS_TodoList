import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AppController, TodoController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AtGuard,
    // },
    TodoService
  ],
})
export class AppModule {}
