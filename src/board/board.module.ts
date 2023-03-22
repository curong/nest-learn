import { BoardService } from './board.service';
import { BoardController } from './board.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { BoardResolver } from './board.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

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
