import { AuthModule } from './../auth/auth.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'src/config/typeorm/orm.config';
import { BoardModule } from './../board/board.module';

@Module({
  imports: [
    // ENV Config Module //
    ConfigModule.forRoot({ isGlobal: true }),

    // GraphQL Using //
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: true, }),

    // TypeORM Using //
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    AuthModule,
    BoardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
