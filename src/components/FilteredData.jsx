import { useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';
import { BookmarksContext } from '@/context/BookmarksContext';
import CardItem from '@/components/CardItem';

const FilteredData = ({ data }) => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { query } = useContext(SearchContext);

  if (!Array.isArray(data)) {
    return null;
  }

  const resultCount = data.length;
  const queryDisplay = query ? `'${query}'` : '';

  return (
    <div>
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        Found {resultCount} results for {queryDisplay}
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
        {data.map((item, index) => (
          <CardItem
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

export default FilteredData;
