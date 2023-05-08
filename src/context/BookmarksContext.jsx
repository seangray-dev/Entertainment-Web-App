import { createContext, useEffect, useState } from 'react';

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from local storage after component mounts
  useEffect(() => {
    const localBookmarks = localStorage.getItem('bookmarks');
    if (localBookmarks) {
      setBookmarks(JSON.parse(localBookmarks));
    }
  }, []);

  const handleBookmark = (item) => {
    setBookmarks((prevBookmarks) => {
      const bookmarkExists = prevBookmarks.some(
        (bookmark) => bookmark.id === item.id
      );

      let updatedBookmarks;
      if (bookmarkExists) {
        updatedBookmarks = prevBookmarks.filter(
          (bookmark) => bookmark.id !== item.id
        );
      } else {
        updatedBookmarks = [...prevBookmarks, item];
      }

      // Save updated bookmarks to local storage
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, handleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};
