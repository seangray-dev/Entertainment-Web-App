import { createContext, useState } from 'react';
import data from '../data/data.json';

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(
    data.filter((item) => item.isBookmarked)
  );

  const handleBookmark = (item) => {
    const updatedBookmarks = [...bookmarks];
    const index = updatedBookmarks.indexOf(item);

    if (index === -1) {
      updatedBookmarks.push(item);
    } else {
      updatedBookmarks.splice(index, 1);
    }

    setBookmarks(updatedBookmarks);
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, handleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};
