import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import MovieCardItem from '@/components/MovieCardItem';
import Search from '@/components/Search';
import data from '../data/data.json';

const tvseries = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  
  const tvSeries = data.filter((items) => items.category === 'TV Series');

  return (
    <section className='mt-10 pb-[61px] xl:ml-8'>
      <Search />
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        TV Series
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
        {tvSeries.map((item, index) => (
          <MovieCardItem
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

export default tvseries;
