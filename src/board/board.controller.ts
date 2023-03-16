/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {

    constructor(private readonly boardService: BoardService) { }

    @Get('getAllList')
    getAllBoardList(): Board[] {
        return this.boardService.getBoardList();
    }


}
