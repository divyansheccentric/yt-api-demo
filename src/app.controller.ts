import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import AppService from './app.service';

@Controller('video')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('get-by-id')
  async fetchDetails(
    @Body() input: { id: string; access_token: string; apiKey: string },
  ): Promise<any> {
    return await this.appService.fetchVideoDetailsById(
      input.id,
      input.access_token,
      input.apiKey,
    );
  }
}
