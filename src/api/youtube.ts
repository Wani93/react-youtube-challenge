import axios from 'axios';

const search = async (keyword: string) => {
  const url = keyword ? '/data/search.json' : '/data/trend.json';

  return axios.get(url).then((res) => res.data.items);
};

export default search;
