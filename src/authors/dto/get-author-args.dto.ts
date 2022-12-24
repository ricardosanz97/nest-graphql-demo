import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  lastName?: string;
}
