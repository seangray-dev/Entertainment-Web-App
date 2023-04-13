import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import data from '../data/data.json';
import TrendingCardItem from './TrendingCardItem';

const Trending = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const trending = data.filter((items) => items.isTrending);

  return (
    <section className='mt-6'>
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        Trending
      </h2>
      <div className='flex overflow-x-scroll hide-scroll-bar snap-x snap-mandatory'>
        <div className='flex flex-nowrap'>
          <ul className='flex gap-4 md:gap-10 flex-nowrap'>
            {trending.map((item, index) => (
              <TrendingCardItem
                key={`${item.id}${index}`}
                item={item}
                updatedBookmarks={bookmarks}
                handleBookmark={handleBookmark}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trending;
