
export const tmdbConfig = {
  apiKey: '09e0eae6747fa665c21e15fe465c1fd3', // Get your API key from https://www.themoviedb.org/settings/api
  baseUrl: 'https://api.themoviedb.org/3',
  imageBaseUrl: 'https://image.tmdb.org/t/p',
  language: 'en-US'
} as const;

export type TmdbConfig = typeof tmdbConfig;
