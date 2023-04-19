const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const fetchTrendingAllWeek = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=0d3bd3534eb2bf8783829a8fe0b8b08c`
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
      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
      : `https://image.tmdb.org/t/p/original${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
  }));
};
