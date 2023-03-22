import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Board } from "./board.entity";

@Injectable()
export class BoardRepository {
    constructor(
        @InjectRepository(Board) private readonly boardRepository: Repository<Board>
    ) { }


    async getBoardById(id): Promise<Board> {
        const board = await this.boardRepository.findOneBy(id);

        if (!board) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }

        return board;
    }

}