import axios, { AxiosInstance } from 'axios';

export default class Youtube {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async search(keyword: string) {
    return keyword ? this.#searchByKeword(keyword) : this.#mostPopular();
  }

  async #searchByKeword(keyword: string) {
    return this.httpClient
      .get('/search', {
        params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId })),
      );
  }

  async #mostPopular() {
    return this.httpClient
      .get('/videos', {
        params: { part: 'snippet', maxResults: 25, chart: 'mostPopular' },
      })
      .then((res) => res.data.items);
  }
}
