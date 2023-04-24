import { useContext } from 'react';
import Image from 'next/image';
import SearchIcon from 'public/assets/icon-search.svg';
import { SearchContext } from '@/context/SearchContext';
import { BookmarksContext } from '@/context/BookmarksContext';
import { search } from '../../lib/tmdb';

const Search = ({ currentPage }) => {
  const { query, setQuery, setFilteredData } = useContext(SearchContext);
  const { bookmarks } = useContext(BookmarksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredData(query);
  };

  const handleChange = async (e) => {
    const value = e.target.value.toLowerCase();

    setQuery(value);

    if (value.trim() === '') {
      setFilteredData([]);
      return;
    }

    try {
      const searchData = await search(value);

      let filteredData = searchData;
      if (currentPage === 'movies') {
        filteredData = searchData.filter((item) => item.category === 'Movie');
      } else if (currentPage === 'tv-series') {
        filteredData = searchData.filter(
          (item) => item.category === 'TV Series'
        );
      }

      if (currentPage === 'bookmarks') {
        filteredData = filteredData.filter((item) =>
          bookmarks.some((bookmark) => bookmark.id === item.id)
        );
      }

      setFilteredData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  let placeholderText = 'Search for movies or TV series';
  if (currentPage === 'movies') {
    placeholderText = 'Search for movies';
  } else if (currentPage === 'tv-series') {
    placeholderText = 'Search for TV series';
  } else if (currentPage === 'bookmarks') {
    placeholderText = 'Search for bookmarked shows';
  }

  return (
    <form className='flex gap-4 mt-6 xl:mt-16' onSubmit={handleSubmit}>
      <Image width={32} height={32} src={SearchIcon} alt={'search'}></Image>
      <input
        className='caret-red bg-transparent w-full outline-none text-white placeholder:text-white placeholder:opacity-50 placeholder:font-light focus:border-b focus:border-grayishBlue'
        placeholder={placeholderText}
        type='text'
        value={query}
        onChange={handleChange}
      />
      <button type='submit'></button>
    </form>
  );
};

export default Search;
