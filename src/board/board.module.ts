import { BoardService } from './board.service';
import { BoardController } from './board.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { BoardResolver } from './board.resolver';

@Module({
    imports: [],
    controllers: [BoardController,],
    providers: [
        BoardService,
        BoardResolver
    ],
})
export class BoardModule { }
