import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';

// ? https://docs.nestjs.com/graphql/resolvers

// Following the Code First approach
@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => [Post])
  posts: Post[];
}

// Following the Schema First approach
// type Author {
//   id: Int!
//   firstName: String
//   lastName: String
//   posts: [Post!]!
// }
