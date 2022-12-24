import {
  Args,
  Int,
  Mutation,
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
  /**
   * Gets an author given its id
   * @param id the id of the author
   * @returns the author object
   */
  @Query(() => Author)
  async getAuthor(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  // Field resolver function
  /**
   * Gets all the posts of an author
   * @param author the author to get the posts from
   * @returns a list of posts
   */
  @ResolveField('getPosts', () => [Post])
  async getPosts(@Parent() author: Author): Promise<Post[]> {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  // ? https://docs.nestjs.com/graphql/mutations
  /**
   * Updates a post by upvoting it
   * @param postId the id of the post to upvote
   * @returns the updated post
   */
  @Mutation(() => Post)
  async upvotePost(
    @Args({ name: 'postId', type: () => Int }) postId: number,
  ): Promise<Post> {
    return this.postsService.upvoteById(postId);
  }
}
