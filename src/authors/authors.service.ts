import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  async findOneById(id: number): Promise<Author> {
    return new Author();
  }
}
