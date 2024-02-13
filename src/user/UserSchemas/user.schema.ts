import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface UserSchema extends InMemoryDBEntity {
  username: string;
  age: number;
  hobbies: string[];
}
