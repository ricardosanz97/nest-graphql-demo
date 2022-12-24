import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  async findOneById(id: number): Promise<Author> {
    const author: Author = new Author();
    author.id = id;
    author.firstName = 'Ricardo';
    author.lastName = 'Sanz';
    author.posts = [];
    return author;
  }
}
