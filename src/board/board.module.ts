import { BoardController } from './web/board.controller';
/*
https://docs.nestjs.com/modules
*/

import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';
import { BoardRepository } from './repository/board.repository';
import { BoardResolver } from './resolver/board.resolver';
import { BoardService } from './service/board.service';
import { AuthModule } from 'src/auth/auth.module';



@Module({
    imports: [TypeOrmModule.forFeature([Board]), AuthModule,],
    controllers: [BoardController],
    providers: [
        BoardService,
        BoardResolver,
        BoardRepository,
    ],
})

export class BoardModule { }
