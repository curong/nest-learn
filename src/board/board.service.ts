/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDTO } from './dto/create-board.dto';

@Injectable()
export class BoardService {

    private board: Board[] = [];

    getBoardList(): Board[] {
        return this.board;
    }

    createBoard(createBoardDTO: CreateBoardDTO): Board {
        const { title, description } = createBoardDTO
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.board.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        const found = this.board.find((board) => board.id === id);

        if(!found) {
            throw new NotFoundException(`ID를 확인 해 주세요 ${id}`);
        }

        return found;
    }

    deleteBoard(id: string) {
        const found = this.getBoardById(id);
        return this.board.filter((board) => board.id !== found.id);
    }

    updateBoard(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status
        return board;
    }

}
