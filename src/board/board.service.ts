/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardServiceItf } from './board.service-itf';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDTO } from './dto/update-board.dto';

@Injectable()
export class BoardService implements BoardServiceItf {

    constructor(private readonly boardRepository: BoardRepository) { }


    getBoardList(): Promise<Board[]> {
        return this.boardRepository.getBoardList();
    }

    getBoardById(id: number): Promise<Board> {
        return this.boardRepository.getBoardById(id);
    }

    createBoard(createBoardDto: CreateBoardDTO) {
        return this.boardRepository.createBoard(createBoardDto);
    }

    deleteBoard(id: number): Promise<void> {
        return this.boardRepository.deleteBoard(id);
    }

    updateBoard(id: number, updateBoardDTO: UpdateBoardDTO) {
        return this.boardRepository.updateBoard(id, updateBoardDTO);
    }

}
