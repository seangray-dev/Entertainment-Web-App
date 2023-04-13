import { useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';
import Search from '@/components/Search';
import FilteredData from '@/components/FilteredData';
import Trending from '@/components/Trending';
import Recommended from '@/components/Recommended';

export default function Home() {
  const { query, filteredData } = useContext(SearchContext);

  return (
    <div className='xl:ml-8'>
      <Search />
      {query && <FilteredData data={filteredData} />}
      {!query && (
        <>
          <Trending />
          <Recommended />
        </>
      )}
    </div>
  );
}
