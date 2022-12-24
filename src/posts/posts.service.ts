import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  /**
   * Retrieves all the posts given a filter
   * @param filter the given filter to be applied on the query
   * @returns a list of posts
   */
  async findAll(filter: any): Promise<Post[]> {
    const post: Post = new Post();
    post.id = 1;
    post.title = 'Post example';
    post.votes = post.votes ? post.votes + 1 : 1;
    return [post];
  }

  /**
   * Upvotes a post given its id
   * @param id the id of the post
   * @returns the upvoted post
   */
  async upvoteById(id: number): Promise<Post> {
    console.log(id);
    const post: Post = new Post();
    post.id = id;
    post.title = 'Post example';
    post.votes = post.votes ? post.votes + 1 : 1;
    return post;
  }
}
