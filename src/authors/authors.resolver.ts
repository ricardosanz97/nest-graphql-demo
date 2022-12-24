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
import { GetAuthorArgs } from './dto/get-author-args.dto';

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
  @ResolveField()
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
