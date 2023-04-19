import { useContext, useState, useEffect } from 'react';
import { BookmarksContext } from '@/context/BookmarksContext';
import { SearchContext } from '@/context/SearchContext';
import FilteredData from '@/components/FilteredData';
import GenreSection from '@/components/GenreSection';
import Search from '@/components/Search';
import { fetchCurrentlyAiringShows, fetchTopRatedShows } from '../../lib/tmdb';
import useFetchGenreShows from '@/hooks/useFetchGenreShows';

const genres = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 10762, name: 'Kids' },
  { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' },
];

const tvseries = () => {
  const { bookmarks, handleBookmark } = useContext(BookmarksContext);
  const { query, filteredData } = useContext(SearchContext);
  const [airingShows, setAiringShows] = useState([]);
  const [topRatedShows, setTopRatedShows] = useState([]);
  const genreShows = genres.map((genre) => useFetchGenreShows(genre.id));

  useEffect(() => {
    const getAiringShows = async () => {
      try {
        const airingShows = await fetchCurrentlyAiringShows();
        setAiringShows(
          airingShows.sort((a, b) => b.vote_average - a.vote_average)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getAiringShows();
  }, []);

  useEffect(() => {
    const getTopRatedShows = async () => {
      try {
        const topRatedShows = await fetchTopRatedShows();
        setTopRatedShows(topRatedShows);
      } catch (error) {
        console.log(error);
      }
    };
    getTopRatedShows();
  }, []);

  return (
    <section className='mt-10 pb-[61px] xl:ml-8'>
      <Search currentPage='tv-series' />
      {query && <FilteredData data={filteredData} />}
      {!query && (
        <>
          <GenreSection
            title='Currently Airing'
            items={airingShows}
            bookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
          <GenreSection
            title='Top Rated'
            items={topRatedShows}
            bookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
          {genreShows.map((items, index) => (
            <GenreSection
              key={genres[index].id}
              title={genres[index].name}
              items={items}
              bookmarks={bookmarks}
              handleBookmark={handleBookmark}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default tvseries;
