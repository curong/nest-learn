import { BoardController } from './web/board.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';
import { BoardRepository } from './repository/board.repository';
import { BoardResolver } from './resolver/board.resolver';
import { BoardService } from './service/board.service';



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
