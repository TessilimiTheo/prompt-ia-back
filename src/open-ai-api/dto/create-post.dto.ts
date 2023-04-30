import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly theme: string;
  @IsNumber()
  @IsNotEmpty()
  readonly contentLenght: number;
  @IsString()
  @IsNotEmpty()
  readonly tonality: string;
  @IsArray()
  readonly hashtag: Array<string>;
  readonly isArticle: boolean;
}
