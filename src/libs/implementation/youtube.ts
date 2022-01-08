import { BadRequestException, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { IYoutubeUtil } from '../youtube.interface';

@Injectable()
export default class YouTubeUtil implements IYoutubeUtil {
  async searchById(
    id: string,
    access_token: string,
    apiKey: string,
  ): Promise<any> {
    if (!id) throw new BadRequestException('Please pass a video id');
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=status&part=topicDetails&part=localizations&part=statistics&id=${id}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = await response.json();

    return data;
  }
}
