import { IsNotEmpty, IsArray, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @IsString({ each: true })
  @IsArray()
  hobbies: string[];
}
