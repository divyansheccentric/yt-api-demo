import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import AppService from './app.service';
import YouTubeUtil from './libs/implementation/youtube';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: 'IYouTube', useClass: YouTubeUtil }, AppService],
})
export class AppModule {}
