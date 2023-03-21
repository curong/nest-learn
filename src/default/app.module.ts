import { BoardModule } from './../board/board.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'src/config/typeorm/orm.config';

@Module({
  imports: [
    // GraphQL Using //
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    // TypeORM Using //
    // TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    BoardModule,    
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
