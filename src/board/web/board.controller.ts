/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { Board } from '../entity/board.entity';

import { CreateBoardDTO } from '../dto/create-board.dto';
import { UpdateBoardDTO } from '../dto/update-board.dto';
import { BoardService } from '../service/board.service';

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
