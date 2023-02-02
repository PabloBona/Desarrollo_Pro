import axios from 'axios';

export const fetcher = (url: string) =>
  axios.get(url).then((resp) => resp.data);
