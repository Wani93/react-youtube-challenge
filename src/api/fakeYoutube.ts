import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword: string) {
    return keyword ? this.#searchByKeword() : this.#mostPopular();
  }

  async #searchByKeword() {
    return axios
      .get('/data/search.json')
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId })),
      );
  }

  async #mostPopular() {
    return axios.get('/data/trend.json').then((res) => res.data.items);
  }
}
