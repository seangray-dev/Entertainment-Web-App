import { useState, useEffect } from 'react';
import { fetchGenreShows } from '../../lib/tmdb';

const useFetchGenreShows = (genreId) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreShows = await fetchGenreShows(genreId);
        setShows(genreShows.filter((shows) => shows.vote_average > 7));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreId]);

  return shows;
};

export default useFetchGenreShows;
