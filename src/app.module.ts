import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorsService } from './authors/authors.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsService, PostsService],
})
export class AppModule {}
