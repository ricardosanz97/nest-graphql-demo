import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from 'src/posts/posts.service';

import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';
import { Post } from '../posts/models/post.model';

// ? https://docs.nestjs.com/graphql/resolvers
@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  // Query resolver function
  @Query(() => Author)
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return await this.authorsService.findOneById(id);
  }

  // Field resolver function
  @ResolveField('getPosts', () => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
