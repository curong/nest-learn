/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/auth/entity/auth.entity';
import { UserAuthentication } from 'src/common/jwt/decorator/auth.decorator';
import { CreateBoardDTO } from '../dto/create-board.dto';
import { UpdateBoardDTO } from '../dto/update-board.dto';
import { Board } from '../entity/board.entity';
import { BoardService } from '../service/board.service';

@Controller('board')
@UsePipes(ValidationPipe)
@UseGuards(AuthGuard())
export class BoardController {

    private logger: Logger = new Logger('BoardController');

    constructor(
        private readonly boardService: BoardService,
    ) { }

    @Get('/all')
    getBoardList() {
        return this.boardService.getBoardList();
    }

    @Get('/:pid')
    getBoardBypid(@Param('pid', ParseIntPipe) pid: number): Promise<Board> {
        return this.boardService.getBoardBypid(pid);
    }

    @Get()
    getBoardByAuth(
        @UserAuthentication() auth: Auth
    ): Promise<Board[]> {
        this.logger.verbose(`User ${auth.userId} trying to get all board`);
        return this.boardService.getBoardByUser(auth);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDTO,
        @UserAuthentication() auth: Auth
    ): Promise<Board> {
        this.logger.verbose(`User ${auth.userId} creating a new board. \n Payload: ${JSON.stringify(createBoardDto)} `)
        return this.boardService.createBoard(createBoardDto, auth);
    }

    @Put('/:pid')
    updateBoard(@Param('pid', ParseIntPipe) pid: number, @Body() updateBoardDTO: UpdateBoardDTO) {
        return this.boardService.updateBoard(pid, updateBoardDTO);
    }


    @Delete('/:pid')
    deleteBoard(
        @Param('pid', ParseIntPipe) pid: number,
        @UserAuthentication() auth: Auth,
    ): Promise<void> {
        return this.boardService.deleteBoard(pid, auth);
    }

}
