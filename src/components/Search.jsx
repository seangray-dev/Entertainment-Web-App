import Image from 'next/image';
import SearchIcon from 'public/assets/icon-search.svg';

const Search = () => {
  return (
    <form className='flex gap-4 mt-6 xl:mt-16'>
      <Image width={32} height={32} src={SearchIcon} alt={'search'}></Image>
      <input
        className='caret-red bg-transparent w-full outline-none text-white placeholder:text-white placeholder:opacity-50 placeholder:font-light focus:border-b focus:border-grayishBlue'
        placeholder='Search for movies or TV series'
        type='text'
      />
      <button type='submit'></button>
    </form>
  );
};

export default Search;
