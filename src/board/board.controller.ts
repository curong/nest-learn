/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardService } from './board.service';
import { CreateBoardDTO } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('board')
export class BoardController {

    constructor(private readonly boardService: BoardService) { }
    

    @Get()
    getAllBoardList(): Board[] {
        return this.boardService.getBoardList();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string) {
        console.log(id);
        return this.boardService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDTO: CreateBoardDTO): Board {
        return this.boardService.createBoard(createBoardDTO);
    }

    @Delete('/:id')
    deleteBoard(@Body('id') id: string): void {
        this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoard(
        @Param('id')id : string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus){
        return this.boardService.updateBoard(id, status);
    }


}
