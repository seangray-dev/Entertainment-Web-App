const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// Search

export const search = async (query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${query}`
  );
  const data = await res.json();

  const filteredData = data.results.filter((item) => {
    return item.backdrop_path !== null && item.backdrop_path !== undefined;
  });

  return filteredData.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: item.media_type === 'movie' ? 'Movie' : 'TV Series',
    image: `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
  }));
};

// Trending All

export const fetchTrendingAllWeek = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}`
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

// Movies

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Popular Movies: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'Movie',
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

export const fetchUpcomingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Upcoming Movies: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'Movie',
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

export const fetchTopRatedMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Top Rated Movies: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'Movie',
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

export const fetchGenreMovies = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Genre Movies: ${response.status}`);
  }

  const data = await response.json();
  const limitedResults = data.results.slice(0, 20);

  return limitedResults.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'Movie',
    image: item.backdrop_path
      ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
      : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
    genreId: item.genre_ids.map((genreId) => genreId),
  }));
};

// Shows

export const fetchPopularShows = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Popular Shows: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'TV Series',
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

export const fetchCurrentlyAiringShows = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Currently Airing Shows: ${response.status}`
    );
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'Movie',
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

export const fetchTopRatedShows = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Top Rated Shows: ${response.status}`);
  }

  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'Movie',
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

export const fetchGenreShows = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&languages=en-US&sort_by=popularity.desc&with_genres=${genreId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Genre Shows: ${response.status}`);
  }

  const data = await response.json();
  const limitedResults = data.results;

  return limitedResults.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: 'TV Series',
    image: item.backdrop_path
      ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
      : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
    genreId: item.genre_ids.map((genreId) => genreId),
    vote_average: item.vote_average,
  }));
};

/////// ITEMS DETAILS //////////

export const fetchItemDetails = async (id, category) => {
  const itemType = category === 'Movie' ? 'movie' : 'tv';

  // Fetch item details
  const detailsResponse = await fetch(
    `${BASE_URL}/${itemType}/${id}?api_key=${TMDB_API_KEY}&language=en-US`
  );

  if (!detailsResponse.ok) {
    throw new Error(`Failed to fetch item details: ${detailsResponse.status}`);
  }

  const detailsData = await detailsResponse.json();

  // Fetch cast information
  const creditsResponse = await fetch(
    `${BASE_URL}/${itemType}/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
  );

  if (!creditsResponse.ok) {
    throw new Error(`Failed to fetch credits: ${creditsResponse.status}`);
  }

  const creditsData = await creditsResponse.json();

  // Process and combine details and cast data
  const item = {
    title: detailsData.title || detailsData.name,
    poster: `${TMDB_IMAGE_ENDPOINT}${detailsData.poster_path}`,
    length: detailsData.runtime || detailsData.episode_run_time,
    language: detailsData.original_language,
    year:
      detailsData.release_date?.slice(0, 4) ||
      detailsData.first_air_date?.slice(0, 4),
    synopsis: detailsData.overview,
    rating: detailsData.vote_average,
    genres: detailsData.genres.map((genre) => genre.name),
    tagline: detailsData.tagline,
    status: detailsData.status,
    cast: creditsData.cast.map((actor) => actor.name),
  };

  return item;
};
