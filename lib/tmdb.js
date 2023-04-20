const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  return response.json();
};

// filter movies/shows that have a backdrop drop path image
const filterData = (data) => data.results.filter((item) => item.backdrop_path);

const formatResults = (item) => ({
  id: item.id,
  title: item.title || item.name,
  category: item.media_type === 'movie' ? 'Movie' : 'TV Series',
  image: item.backdrop_path
    ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
    : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
  year:
    item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4) || 'N/A',
  rating: item.adult ? 'Adult' : 'E',
  genreId: item.genre_ids?.map((genreId) => genreId),
  vote_average: item.vote_average,
});

export const search = async (query) => {
  const data = await fetchData(
    `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${query}`
  );
  return filterData(data).map(formatResults);
};

const fetchList = async (url, type) => {
  const data = await fetchData(url);
  return filterData(data).map((item) => ({
    ...formatResults(item),
    category: type,
  }));
};

export const fetchTrendingAllWeek = async () =>
  fetchList(`${BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}`);

export const fetchPopularMovies = async () =>
  fetchList(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    'Movie'
  );

export const fetchUpcomingMovies = async () =>
  fetchList(
    `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    'Movie'
  );

export const fetchTopRatedMovies = async () =>
  fetchList(
    `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    'Movie'
  );

export const fetchGenreMovies = async (genreId) =>
  fetchList(
    `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`,
    'Movie'
  );

export const fetchPopularShows = async () =>
  fetchList(
    `${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    'TV Series'
  );

export const fetchCurrentlyAiringShows = async () =>
  fetchList(
    `${BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=en-US`,
    'TV Series'
  );

export const fetchTopRatedShows = async () =>
  fetchList(
    `${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    'TV Series'
  );

export const fetchGenreShows = async (genreId) =>
  fetchList(
    `${BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&languages=en-US&sort_by=popularity.desc&with_genres=${genreId}`,
    'TV Series'
  );
