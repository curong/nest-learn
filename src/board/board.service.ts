/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardService {

    private board: Board[] = [];

    getBoardList(): Board[] {
        return this.board;
    }


}
