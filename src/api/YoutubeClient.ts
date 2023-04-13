import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IYoutubeClient {
  search: (params: any) => Promise<AxiosResponse>;
  videos: (params: any) => Promise<AxiosResponse>;
}

export default class YoutubeClient implements IYoutubeClient {
  apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async search(params: any) {
    return this.apiClient.get('/search', params);
  }

  async videos(params: any) {
    return this.apiClient.get('/videos', params);
  }
}
