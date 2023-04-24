const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  return await response.json();
};

const processData = (results, requireBackdrop = false) => {
  const items = requireBackdrop
    ? results.filter((item) => item.backdrop_path)
    : results;

  return items.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    // movies have a title property and TV series have a name property
    category: item.title ? 'Movie' : 'TV Series',
    image: item.backdrop_path
      ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
      : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
    genreIds: item.genre_ids,
    vote_average: item.vote_average,
  }));
};

const buildUrl = (path, queryParams) => {
  const url = new URL(`${BASE_URL}${path}`);
  queryParams.set('api_key', TMDB_API_KEY);
  queryParams.set('language', 'en-US');
  url.search = queryParams.toString();
  return url.href;
};

const fetchGenreItems = async (path, genreId) => {
  const queryParams = new URLSearchParams({ with_genres: genreId });
  const url = buildUrl(path, queryParams);
  const data = await fetchData(url);
  return processData(data.results);
};

// Search

export const search = async (query) => {
  const url = buildUrl('/search/multi', new URLSearchParams({ query }));
  const data = await fetchData(url);
  const filteredData = data.results.filter(
    (item) => item.backdrop_path !== null && item.backdrop_path !== undefined
  );
  return processData(filteredData);
};

// Trending All

export const fetchTrendingAllWeek = async () => {
  const url = buildUrl('/trending/all/week', new URLSearchParams());
  const data = await fetchData(url);
  return processData(data.results);
};

// Movies

const fetchMoviesByPath = async (
  path,
  mediaType = 'movie',
  requireBackdrop = false
) => {
  const url = buildUrl(path, new URLSearchParams());
  const data = await fetchData(url);
  const processedData = processData(data.results, requireBackdrop);
  return processedData.map((item) => ({
    ...item,
    category: mediaType === 'movie' ? 'Movie' : 'TV Series',
  }));
};

export const fetchPopularMovies = async () => {
  return fetchMoviesByPath('/movie/popular', 'movie', true);
};

export const fetchUpcomingMovies = async () => {
  return fetchMoviesByPath('/movie/upcoming');
};

export const fetchTopRatedMovies = async () => {
  return fetchMoviesByPath('/movie/top_rated');
};

export const fetchGenreMovies = async (genreId) => {
  return fetchGenreItems('/discover/movie', genreId);
};

// Shows

const fetchTVSeriesByPath = async (path, requireBackdrop = false) => {
  const url = buildUrl(path, new URLSearchParams());
  const data = await fetchData(url);
  return processData(data.results, requireBackdrop).map((item) => ({
    ...item,
    category: 'TV Series',
  }));
};

export const fetchPopularShows = async () => {
  return fetchTVSeriesByPath('/tv/popular', true);
};

export const fetchCurrentlyAiringShows = async () => {
  return fetchTVSeriesByPath('/tv/on_the_air');
};

export const fetchTopRatedShows = async () => {
  return fetchTVSeriesByPath('/tv/top_rated');
};

export const fetchGenreShows = async (genreId) => {
  return fetchGenreItems('/discover/tv', genreId);
};

// Movie / Show id pages

const fetchItemCredits = async (id, itemType) => {
  const creditsUrl = buildUrl(
    `/${itemType}/${id}/credits`,
    new URLSearchParams()
  );
  const creditsData = await fetchData(creditsUrl);
  return creditsData.cast.map((actor) => actor.name);
};

export const fetchItemDetails = async (id, category) => {
  const itemType = category === 'Movie' ? 'movie' : 'tv';

  const detailsUrl = buildUrl(`/${itemType}/${id}`, new URLSearchParams());
  const detailsData = await fetchData(detailsUrl);
  const cast = await fetchItemCredits(id, itemType);

  const item = {
    title: detailsData.title || detailsData.name,
    poster: `${TMDB_IMAGE_ENDPOINT}${detailsData.poster_path}`,
    length: detailsData.runtime || detailsData.episode_run_time || null,
    language: detailsData.original_language,
    year:
      detailsData.release_date?.slice(0, 4) ||
      detailsData.first_air_date?.slice(0, 4),
    synopsis: detailsData.overview,
    rating: detailsData.vote_average,
    genres: detailsData.genres.map((genre) => genre.name),
    tagline: detailsData.tagline,
    status: detailsData.status,
    cast: cast,
  };

  return item;
};
