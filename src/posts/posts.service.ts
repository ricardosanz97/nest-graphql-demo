import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  async findAll(filter: any): Promise<Post[]> {
    return [];
  }

  async upvoteById(id: number): Promise<Post> {
    console.log(id);
    const post: Post = new Post();
    post.id = id;
    post.title = 'Post example';
    post.votes = post.votes ? post.votes + 1 : 1;
    return post;
  }
}
