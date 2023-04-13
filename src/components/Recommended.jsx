import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import data from '../data/data.json';
import CardItem from './CardItem';

const Recommended = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);

  const notTrending = data.filter((items) => !items.isTrending);

  return (
    <section className='mt-10 pb-[61px]'>
      <h2 className='text-white text-xl md:text-[32px] font-light mb-4 md:mb-6 xl:mb-8'>
        Recommended For You
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
        {notTrending.map((item, index) => (
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
