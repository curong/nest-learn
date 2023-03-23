/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDTO } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('board')
@UsePipes(ValidationPipe)
export class BoardController {

    constructor(private readonly boardService: BoardService) { }

    @Get()
    getBoardList() {
        return this.boardService.getBoardList();
    }

    @Get('/:id')
    getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDTO) {
        return this.boardService.createBoard(createBoardDto);
    }

    @Put('/:id')
    updateBoard(@Res() res: Response, @Param('id', ParseIntPipe) id: number, @Body() updateBoardDTO: UpdateBoardDTO) {
        return this.boardService.updateBoard(id, updateBoardDTO);
    }


    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.boardService.deleteBoard(id);
    }



}
