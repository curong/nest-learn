import { Auth } from "src/auth/entity/auth.entity";
import { CommonEntity } from "src/common/entity/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { BoardStatus } from "../enum/board-status.enum";

@Entity('board')
export class Board extends CommonEntity {

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;

    @ManyToOne(type => Auth, auth => auth.boards, { eager: false })
    auth: Auth;

}