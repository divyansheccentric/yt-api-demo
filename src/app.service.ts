import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IYouTube } from './libs';

@Injectable()
export default class AppService {
  constructor(@Inject('IYouTube') private readonly IYouTube: IYouTube) {}

  async fetchVideoDetailsById(
    id: string,
    access_token: string,
    apiKey: string,
  ): Promise<any> {
    if (!id) throw new BadRequestException('No Id Passed');
    if (!access_token) throw new BadRequestException('No Access Token Passed');
    if (!apiKey) throw new BadRequestException('No Api Key Passed');

    return await this.IYouTube.searchById(id, access_token, apiKey);
  }
}
