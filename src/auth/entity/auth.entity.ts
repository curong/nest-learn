import { CommonEntity } from "src/common/entity/time-manager.entity";
import { Column, Entity, UpdateDateColumn } from "typeorm";

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

}