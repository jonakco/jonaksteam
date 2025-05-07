
export const tmdbConfig = {
  apiKey: 'YOUR_TMDB_API_KEY', // Replace this with your actual API key
  baseUrl: 'https://api.themoviedb.org/3',
  imageBaseUrl: 'https://image.tmdb.org/t/p',
  language: 'en-US'
} as const;

export type TmdbConfig = typeof tmdbConfig;
