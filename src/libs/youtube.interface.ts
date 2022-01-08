export interface IYoutubeUtil {
  searchById(id: string, access_token: string, apiKey: string): Promise<any>;
}
