import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/auth/entity/auth.entity';
import { Repository } from 'typeorm';
import { CreateBoardDTO } from '../dto/create-board.dto';
import { UpdateBoardDTO } from '../dto/update-board.dto';
import { Board } from '../entity/board.entity';
import { BoardStatus } from '../enum/board-status.enum';


@Injectable()
export class BoardRepository {
    constructor(@InjectRepository(Board) private readonly boardRepository: Repository<Board>) { }

    async getBoardList(): Promise<Board[]> {
        return await this.boardRepository.find();
    }

    async getBoardByPid(pid: number): Promise<Board> {

        const board = await this.boardRepository.findOneBy({ pid: pid });

        if (!board) {
            throw new NotFoundException(`Can't find Board with pid ${pid}`)
        }

        return board;
    }

    async getBoardByUser(auth: Auth): Promise<Board[]> {

        const query = this.boardRepository.createQueryBuilder('board');
        query.where('board.auth_pid = :auth_pid', { auth_pid: auth.pid })

        const boards = await query.getMany();
        return boards;

    }

    async createBoard(createBoardDto: CreateBoardDTO, auth: Auth): Promise<Board> {
        const { title, description } = createBoardDto

        const board = this.boardRepository.create({
            title
            , description
            , status: BoardStatus.PUBLIC
            , auth: auth
        })

        await this.boardRepository.save(board);
        return board;
    }

    async deleteBoard(pid: number, auth: Auth): Promise<void> {
        const query = await this.boardRepository.createQueryBuilder('board')
            .delete()
            .from(Board)
            .where('pid = :pid', { pid })
            .andWhere('board.auth_pid = :auth_pid', { auth_pid: auth.pid })
            .execute();


        // this.boardRepository.findBy({ auth: auth })
        // const result = await this.boardRepository.delete();

        // if (query.affected === 0) {
        // throw new NotFoundException(`Can't Not Found pid = ${pid}`);
        // }

    }

    async updateBoard(pid: number, updateBoardDTO: UpdateBoardDTO) {
        const result = await this.boardRepository.update({ pid }, { ...updateBoardDTO });

        if (result.affected === 0) {
            new NotFoundException(`Can't Find Boardpid. Please Checked Boardpid (pid = ${pid})`);
        }

    }

}