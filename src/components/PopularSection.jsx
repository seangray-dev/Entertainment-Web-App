import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import CardItem from './CardItem';
import { fetchPopularMovies, fetchPopularShows } from '../../lib/tmdb';
import SkeletonLoader from '../components/Skeleton/SkeltonLoader-CardItem';
import useFetchData from '@/hooks/useFetchData';

const PopularSection = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { data: movies, isLoading: isMoviesLoading } =
    useFetchData(fetchPopularMovies);
  const { data: shows, isLoading: isShowsLoading } =
    useFetchData(fetchPopularShows);

  const renderContent = (title, isLoading, items) => (
    <>
      <h2 className='text-white text-xl md:text-[32px] font-light mb-4 md:mb-6 xl:mb-8'>
        {title}
      </h2>
      {isLoading ? (
        <div className='mb-4 md:mb-6 xl:mb-8'>
          <SkeletonLoader itemCount={4} />
        </div>
      ) : (
        <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10 mb-10'>
          {items.map((item, index) => (
            <CardItem
              key={`${item.id}${index}`}
              item={item}
              updatedBookmarks={bookmarks}
              handleBookmark={handleBookmark}
            />
          ))}
        </ul>
      )}
    </>
  );

  return (
    <section className='mt-10 pb-[61px]'>
      {renderContent('Popular Movies', isMoviesLoading, movies)}
      {renderContent('Popular Shows', isShowsLoading, shows)}
    </section>
  );
};

export default PopularSection;
