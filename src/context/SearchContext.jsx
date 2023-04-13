import { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  return (
    <SearchContext.Provider
      value={{ query, setQuery, filteredData, setFilteredData }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
