import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly theme: string;
  @IsNumber()
  @IsNotEmpty()
  readonly contentLength: number;
  @IsString()
  @IsNotEmpty()
  readonly tonality: string;
  @IsArray()
  readonly hashtag: Array<string>;
  @IsNotEmpty()
  readonly isArticle: boolean;
  @IsNotEmpty()
  readonly user: string;
  readonly label: string;
}
