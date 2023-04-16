import { AxiosResponse } from 'axios';

export interface IYoutubeClient {
  search: (params: any) => Promise<AxiosResponse>;
  videos: (params: any) => Promise<AxiosResponse>;
  channels: (params: any) => Promise<AxiosResponse>;
}
