import axios, { AxiosInstance } from 'axios';

import { IYoutubeClient } from './types';

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

  async channels(params: any) {
    return this.apiClient.get('/channels', params);
  }
}
