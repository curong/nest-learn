import { BoardController } from './board.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardResolver } from './board.resolver';
import { BoardService } from './board.service';



@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    controllers: [BoardController],
    providers: [
        BoardService,
        BoardResolver,
        BoardRepository,
    ],
})

export class BoardModule { }
