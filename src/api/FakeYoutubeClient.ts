import axios from 'axios';
import { IYoutubeClient } from './YoutubeClient';

export default class FakeYoutube implements IYoutubeClient {
  async search() {
    return axios.get('/data/search.json');
  }

  async videos() {
    return axios.get('/data/trend.json');
  }
}
