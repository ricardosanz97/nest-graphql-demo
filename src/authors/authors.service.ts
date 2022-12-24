import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  /**
   * Retrieve an author given its id
   * @param id the id of the author
   * @returns the author object
   */
  async findOneById(id: number): Promise<Author> {
    const author: Author = new Author();
    author.id = id;
    author.firstName = 'Ricardo';
    author.lastName = 'Sanz';
    author.posts = [];
    return author;
  }
}
