import { createContext, useState } from 'react';

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

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
