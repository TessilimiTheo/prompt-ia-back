import * as process from 'process';

import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class OpenAiApiService {
  private configuration = new Configuration({
    apiKey: process.env.API_KEY,
    organization: process.env.ORGANIZATION_KEY,
  });
  private openai = new OpenAIApi(this.configuration);

  private generatePrompt(createPostDto: CreatePostDto): string {
    const isArticle: string = createPostDto.isArticle
      ? 'ce post sera lié a un article'
      : 'ce post ne sera pas lié à un article';

    const hashtag: string | undefined = createPostDto.hashtag
      ? 'contenant les hashtags ' + createPostDto.hashtag.toString()
      : undefined;

    return `Génère un poste de résaux sociaux sur le thème du ${
      createPostDto.theme
    } ${isArticle}, le texte doit être de ${
      createPostDto.contentLenght
    } caractères maximum sur un ton ${createPostDto.tonality} ${
      hashtag ?? ''
    }.`;
  }

  async GeneratePost(createPostDto: CreatePostDto) {
    console.log(this.generatePrompt(createPostDto));
    try {
      const completion = await this.openai.createCompletion(
        {
          model: 'text-davinci-003',
          prompt: this.generatePrompt(createPostDto),
          max_tokens: 3000,
        },
        {
          timeout: 100000,
        },
      );
      console.log(completion.data.choices[0].text);
      return completion.data.choices[0].text ?? 'Erreur';
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
}
