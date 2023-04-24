import { useContext, useState, useEffect } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import { SearchContext } from '@/context/SearchContext';
import FilteredData from '@/components/FilteredData';
import GenreSection from '@/components/GenreSection';
import Search from '@/components/Search';
import { fetchUpcomingMovies, fetchTopRatedMovies } from '../../lib/tmdb';
import useFetchGenreMovies from '../hooks/useFetchGenreMovies';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const Movies = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { query, filteredData } = useContext(SearchContext);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isLoadingUpcoming, setIsLoadingUpcoming] = useState(true);
  const [isLoadingTopRated, setIsLoadingTopRated] = useState(true);
  const genreMovies = genres.map((genre) => useFetchGenreMovies(genre.id));

  useEffect(() => {
    const getUpcomingMovies = async () => {
      setIsLoadingUpcoming(true);
      try {
        const upcomingMovies = await fetchUpcomingMovies();
        setUpcomingMovies(upcomingMovies.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
      // setIsLoadingUpcoming(false);
    };
    getUpcomingMovies();
  }, []);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      setIsLoadingTopRated(true);
      try {
        const topRatedMovies = await fetchTopRatedMovies();
        setTopRatedMovies(topRatedMovies.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
      // setIsLoadingTopRated(false);
    };
    getTopRatedMovies();
  }, []);

  return (
    <div className='mt-10 pb-[61px] xl:ml-8'>
      <Search currentPage='movies' />
      {query && <FilteredData data={filteredData} />}
      {!query && (
        <>
          <GenreSection
            title='Upcoming'
            items={upcomingMovies}
            bookmarks={bookmarks}
            handleBookmark={handleBookmark}
            isLoading={isLoadingUpcoming}
          />
          <GenreSection
            title='Top Rated'
            items={topRatedMovies}
            bookmarks={bookmarks}
            handleBookmark={handleBookmark}
            isLoading={isLoadingTopRated}
          />
          {genreMovies.map((items, index) => (
            <GenreSection
              key={genres[index].id}
              title={genres[index].name}
              items={items}
              bookmarks={bookmarks}
              handleBookmark={handleBookmark}
              // isLoading={isLoading}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Movies;
