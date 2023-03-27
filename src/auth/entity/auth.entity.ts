import { Board } from "src/board/entity/board.entity";
import { CommonEntity } from "src/common/entity/common.entity";
import { Column, Entity, OneToMany, UpdateDateColumn } from "typeorm";

@Entity('auth')
export class Auth extends CommonEntity {

    @Column({ unique: true })
    userId: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @UpdateDateColumn()
    lastLogin: Date;

    @OneToMany(type => Board, board => board.auth, { eager: true })
    boards: Board[];


}