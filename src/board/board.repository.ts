import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import { Board } from "./board.entity";
import { CreateBoardDTO } from "./dto/create-board.dto";


@Injectable()
export class BoardRepository {
    constructor(@InjectRepository(Board) private readonly boardRepository: Repository<Board>) { }


    async getBoardById(id: number): Promise<Board> {
        const board = await this.boardRepository.findOneBy({ id: id });

        if (!board) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }

        return board;
    }

    async createBoard(createBoardDto: CreateBoardDTO): Promise<Board> {
        const { title, description } = createBoardDto

        const board = this.boardRepository.create({
            title
            , description
            , status: BoardStatus.PUBLIC
        })

        await this.boardRepository.save(board);
        return board;
    }

}