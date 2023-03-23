import { Injectable, NotFoundException } from "@nestjs/common";
import { HttpCode } from "@nestjs/common/decorators";
import { ID } from "@nestjs/graphql";
import { InjectRepository } from "@nestjs/typeorm";
import { STATUS_CODES } from "http";
import { Repository } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import { Board } from "./board.entity";
import { CreateBoardDTO } from "./dto/create-board.dto";
import { UpdateBoardDTO } from "./dto/update-board.dto";


@Injectable()
export class BoardRepository {
    constructor(@InjectRepository(Board) private readonly boardRepository: Repository<Board>) { }

    async getBoardList(): Promise<Board[]> {
        return await this.boardRepository.find();
    }

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

    async deleteBoard(id: number): Promise<void> {
        const result = await this.boardRepository.delete({ id });

        if (result.affected === 0) {
            throw new NotFoundException(`Can't Not Found ID = ${id}`);
        }

    }

    async updateBoard(id: number, updateBoardDTO: UpdateBoardDTO) {
        const result = await this.boardRepository.update({ id }, { ...updateBoardDTO });
        
        if (result.affected === 0) {
            new NotFoundException(`Can't Find BoardId. Please Checked BoardId (ID = ${id})`);
        }
        
    }

}