import { Board } from "../entity/board.entity";
import { CreateBoardDTO } from "../dto/create-board.dto";
import { UpdateBoardDTO } from "../dto/update-board.dto";

export interface BoardServiceItf {

    getBoardList();

    getBoardById(id: number): Promise<Board>;

    createBoard(createBoardDto: CreateBoardDTO);

    deleteBoard(id: number): Promise<void>;

    updateBoard(id: number, updateBoardDTO: UpdateBoardDTO)

}
