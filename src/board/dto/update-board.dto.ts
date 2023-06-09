import { IsNotEmpty } from "class-validator";
import { BoardStatus } from "../enum/board-status.enum";
import { CreateBoardDTO } from "./create-board.dto";

export class UpdateBoardDTO extends CreateBoardDTO {

    @IsNotEmpty()
    status: BoardStatus;

}