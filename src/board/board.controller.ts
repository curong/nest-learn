/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { CreateBoardDTO } from './dto/create-board.dto';

@Controller('board')
@UsePipes(ValidationPipe)
export class BoardController {

    constructor(private readonly boardService: BoardService) { }

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDTO) {
        return this.boardService.createBoard(createBoardDto);
    }

}
