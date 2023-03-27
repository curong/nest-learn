/*
https://docs.nestjs.com/provpiders#services
*/

import { Injectable } from '@nestjs/common';
import { Auth } from 'src/auth/entity/auth.entity';
import { CreateBoardDTO } from '../dto/create-board.dto';
import { UpdateBoardDTO } from '../dto/update-board.dto';
import { Board } from '../entity/board.entity';
import { BoardRepository } from '../repository/board.repository';


@Injectable()
export class BoardService {

    constructor(private readonly boardRepository: BoardRepository) { }


    getBoardList(): Promise<Board[]> {
        return this.boardRepository.getBoardList();
    }

    getBoardBypid(pid: number): Promise<Board> {
        return this.boardRepository.getBoardByPid(pid);
    }

    getBoardByUser(auth: Auth): Promise<Board[]> {
        return this.boardRepository.getBoardByUser(auth);
    }

    createBoard(createBoardDto: CreateBoardDTO, auth: Auth) {
        return this.boardRepository.createBoard(createBoardDto, auth);
    }

    deleteBoard(pid: number, auth: Auth): Promise<void> {
        return this.boardRepository.deleteBoard(pid, auth);
    }

    updateBoard(pid: number, updateBoardDTO: UpdateBoardDTO) {
        return this.boardRepository.updateBoard(pid, updateBoardDTO);
    }

}
