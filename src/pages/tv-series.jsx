import { useContext } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import { SearchContext } from '@/context/SearchContext';
import FilteredData from '@/components/FilteredData';
import GenreSection from '@/components/GenreSection';
import Search from '@/components/Search';

const tvseries = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { query, filteredData } = useContext(SearchContext);

  return (
    <section className='mt-10 pb-[61px] xl:ml-8'>
      <Search currentPage='tv-series' />
      {query && <FilteredData data={filteredData} />}
      {!query && <></>}
    </section>
  );
};

export default tvseries;
