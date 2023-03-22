/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {

    constructor(
        private readonly boardRepository: BoardRepository
    ) { }

    getBoardById(id: number):Promise<Board> {
        return this.boardRepository.getBoardById(id);
    }

    
    


}
