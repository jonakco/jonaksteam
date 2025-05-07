
import axios, { AxiosError } from 'axios';
import {
  collections,
  credits,
  genres,
  images,
  keywords,
  languages,
  movies,
  search,
  season,
  tv,
  videos,
  watchProviders,
  person,
} from '@/lib/tmdb/api';

import { tmdbConfig } from '@/config/tmdb.config';

const TMDB_API_KEY = tmdbConfig.apiKey;

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    const { data, status, config } = error.response;
    console.error('Error fetching data:', {
      message: (data as { message?: string }).message || 'No message available',
      status,
      config,
    });
  } else {
    console.error('Error:', error.message);
  }
};

// Merged client side and server side fetch
export const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDB_API_KEY,
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('TMDB API Authentication failed. Please check your API key.');
    }
    handleAxiosError(error);
    return Promise.reject(new Error('Host not permitted'));
  },
);

export const tmdb = {
  collections,
  credits,
  genres,
  images,
  keywords,
  languages,
  movies,
  search,
  season,
  tv,
  videos,
  watchProviders,
  person,
};

export * from '@/lib/tmdb/models';
export * from '@/lib/tmdb/api';

//New functions from edited code
import { TMDB_API_KEY } from '@/config/tmdb.config';

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
});

export const fetchTrending = async (mediaType: 'all' | 'movie' | 'tv' | 'person', timeWindow: 'day' | 'week' = 'day') => {
  try {
    const response = await tmdbApi.get(`/trending/${mediaType}/${timeWindow}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending:', error);
    return null;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/popular');
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return null;
  }
};

export const fetchPopularTVShows = async () => {
  try {
    const response = await tmdbApi.get('/tv/popular');
    return response.data;
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    return null;
  }
};

export const searchMulti = async (query: string) => {
  try {
    const response = await tmdbApi.get('/search/multi', {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching:', error);
    return null;
  }
};
