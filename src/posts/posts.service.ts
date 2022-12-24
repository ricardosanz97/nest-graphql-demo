import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  async findAll(filter: any): Promise<Post[]> {
    return [];
  }
}
