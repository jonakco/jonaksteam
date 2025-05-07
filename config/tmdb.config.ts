
export const tmdbConfig = {
  apiKey: 'PASTE_YOUR_TMDB_API_KEY_HERE', // Get your API key from https://www.themoviedb.org/settings/api
  baseUrl: 'https://api.themoviedb.org/3',
  imageBaseUrl: 'https://image.tmdb.org/t/p',
  language: 'en-US'
} as const;

export type TmdbConfig = typeof tmdbConfig;
