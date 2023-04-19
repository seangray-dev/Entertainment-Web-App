const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const fetchTrendingAllWeek = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/week?api_key=0d3bd3534eb2bf8783829a8fe0b8b08c`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch trending data: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: item.media_type === 'movie' ? 'Movie' : 'TV Series',
    image: item.backdrop_path
      ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
      : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
  }));
};

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=0d3bd3534eb2bf8783829a8fe0b8b08c&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Popular Movies: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: item.media_type === 'movie' ? 'Movie' : 'TV Series',
    image: item.backdrop_path
      ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
      : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
    vote_average: item.vote_average,
  }));
};
