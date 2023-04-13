import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import { SearchContext } from '@/context/SearchContext';
import FilteredData from '@/components/FilteredData';
import MovieCardItem from '@/components/MovieCardItem';
import Search from '@/components/Search';
import data from '../data/data.json';

const Movies = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { query, filteredData } = useContext(SearchContext);

  const notTrending = data.filter((items) => !items.isTrending);
  const movies = notTrending.filter((items) => items.category === 'Movie');

  return (
    <section className='mt-10 pb-[61px] xl:ml-8'>
      <Search />
      {query && <FilteredData data={filteredData} />}
      {!query && (
        <>
          <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
            Movies
          </h2>
          <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
            {movies.map((item, index) => (
              <MovieCardItem
                key={`${item.id}${index}`}
                item={item}
                updatedBookmarks={bookmarks}
                handleBookmark={handleBookmark}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Movies;
