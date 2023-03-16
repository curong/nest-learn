import { BoardModule } from './../board/board.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BoardModule,],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
