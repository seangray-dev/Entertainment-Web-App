import { useContext } from 'react';
import Image from 'next/image';
import SearchIcon from 'public/assets/icon-search.svg';
import { SearchContext } from '@/context/SearchContext';
import data from '../data/data.json';

const Search = ({ currentPage }) => {
  const { query, setQuery, setFilteredData } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredData(query);
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();

    setQuery(value);

    if (value.trim() === '') {
      setFilteredData([]);
      return;
    }

    let filteredData = data.filter((item) =>
      item.title.toLocaleLowerCase().includes(value)
    );

    if (currentPage === 'movies') {
      filteredData = filteredData.filter((item) => item.category === 'Movie');
    } else if (currentPage === 'tv-series') {
      filteredData = filteredData.filter(
        (item) => item.category === 'TV Series'
      );
    } else if (currentPage === 'bookmarks') {
      filteredData = filteredData.filter((item) => item.isBookmarked);
    }

    setFilteredData(filteredData);
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
