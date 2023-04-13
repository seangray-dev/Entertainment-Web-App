import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import MovieCardItem from '@/components/MovieCardItem';
import Search from '@/components/Search';

const Bookmarks = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);

  const bookmarkedMovies = bookmarks.filter(
    (item) => item.category === 'Movie'
  );
  const bookmarkedTVSeries = bookmarks.filter(
    (item) => item.category === 'TV Series'
  );

  return (
    <div className='mt-10 pb-[61px] xl:ml-8'>
      <Search />

      <section>
        <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
          Bookmarked Movies
        </h2>
        <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
          {bookmarkedMovies.map((item, index) => (
            <MovieCardItem
              key={`${item.id}${index}`}
              item={item}
              updatedBookmarks={bookmarks}
              handleBookmark={handleBookmark}
            />
          ))}
        </ul>
      </section>
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        Bookmarked TV Series
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
        {bookmarkedTVSeries.map((item, index) => (
          <MovieCardItem
            key={`${item.id}${index}`}
            item={item}
            updatedBookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;
