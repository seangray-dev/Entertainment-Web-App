import { useContext } from 'react';
import Image from 'next/image';
import SearchIcon from 'public/assets/icon-search.svg';
import { SearchContext } from '@/context/SearchContext';
import data from '../data/data.json';

const Search = () => {
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

    const movies = data.filter((items) => items.category === 'Movie');

    const tvSeries = data.filter((items) => items.category === 'TV Series');

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(value)
    );

    const filteredTVSeries = tvSeries.filter((show) =>
      show.title.toLocaleLowerCase().includes(value)
    );

    setFilteredData([...filteredMovies, ...filteredTVSeries]);
  };

  return (
    <form className='flex gap-4 mt-6 xl:mt-16' onSubmit={handleSubmit}>
      <Image width={32} height={32} src={SearchIcon} alt={'search'}></Image>
      <input
        className='caret-red bg-transparent w-full outline-none text-white placeholder:text-white placeholder:opacity-50 placeholder:font-light focus:border-b focus:border-grayishBlue'
        placeholder='Search for movies or TV series'
        type='text'
        value={query}
        onChange={handleChange}
      />
      <button type='submit'></button>
    </form>
  );
};

export default Search;
