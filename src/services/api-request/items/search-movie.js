import request from '../request';
import { baseUrl } from '../base-url';
import { logError } from '../../logger';

const cache = {};

export default async function searchMovie(movieTitle) {
  if (cache[movieTitle]) return cache[movieTitle];

  const url = `${baseUrl.IMDB}/?r=json&s=${encodeURIComponent(movieTitle)}`;

  try {
    const { Search } = await request({
      url,
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.RAPID_API_HOST,
        'x-rapidapi-key': process.env.RAPID_API_KEY
      }
    });

    cache[movieTitle] = Search;

    return Search;
  } catch (e) {
    logError(e);
  }
}