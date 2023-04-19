import { useContext, useEffect, useState } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import CardItem from './CardItem';
import { fetchPopularMovies, fetchPopularShows } from '../../lib/tmdb';

const Recommended = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies.filter((movie) => movie.vote_average > 7));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getShows = async () => {
      try {
        const popularShows = await fetchPopularShows();
        setShows(popularShows.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    };
    getShows();
  }, []);

  return (
    <section className='mt-10 pb-[61px]'>
      <h2 className='text-white text-xl md:text-[32px] font-light mb-4 md:mb-6 xl:mb-8'>
        Recommended Movies For You
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10 mb-10'>
        {movies.map((item, index) => (
          <CardItem
            key={`${item.id}${index}`}
            item={item}
            updatedBookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
        ))}
      </ul>
      <h2 className='text-white text-xl md:text-[32px] font-light mb-4 md:mb-6 xl:mb-8'>
        Recommended Shows For You
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
        {shows.map((item, index) => (
          <CardItem
            key={`${item.id}${index}`}
            item={item}
            updatedBookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
        ))}
      </ul>
    </section>
  );
};

export default Recommended;
