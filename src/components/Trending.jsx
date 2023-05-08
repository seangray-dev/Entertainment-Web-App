import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import { fetchTrendingAllWeek } from '../../lib/tmdb';
import TrendingCardItem from './ScrollCardItem';
import SkeletonLoader from './Skeleton/SkeletonLoader-ScrollCard';
import useFetchData from '@/hooks/useFetchData';

const Trending = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { data: trending, isLoading } = useFetchData(fetchTrendingAllWeek);

  return (
    <section className='mt-6'>
      <h2 className='relative text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        Trending
        <span class='animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red opacity-75 md:top-0 md:left-32'></span>
      </h2>
      <div className='flex overflow-x-scroll hide-scroll-bar snap-x snap-mandatory'>
        <div className='flex flex-nowrap'>
          {isLoading ? (
            <SkeletonLoader itemCount={4} />
          ) : (
            <ul className='flex gap-4 md:gap-10 flex-nowrap'>
              {trending.map((item, index) => (
                <TrendingCardItem
                  key={`${item.id}${index}`}
                  item={item}
                  bookmarks={bookmarks}
                  handleBookmark={handleBookmark}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Trending;
