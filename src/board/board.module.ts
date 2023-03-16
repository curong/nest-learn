import { BoardService } from './board.service';
import { BoardController } from './board.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [BoardController,],
    providers: [BoardService,],
})
export class BoardModule { }
