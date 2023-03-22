/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {

    constructor(private readonly boardService: BoardService) { }

    @Get('/:id')
    getBoardById(@Param('id') id: number)/*:  Promise<Board> */ {
        // return id;
        return this.boardService.getBoardById(id);
    }
    

}
