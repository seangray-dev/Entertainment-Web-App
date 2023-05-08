import { useRouter } from 'next/router';
import Image from 'next/image';
import movieIcon from 'public/assets/icon-nav-movies.svg';
import tvIcon from 'public/assets/icon-nav-tv-series.svg';
import play from 'public/assets/icon-play.svg';
import BookmarkIcon from './Icons/BookMarkIcon';

const CardItem = ({ item, bookmarks, handleBookmark }) => {
  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === item.id);

  const router = useRouter();

  const handlePlayClick = (category, id) => {
    if (category === 'Movie') {
      router.push(`/movies/${id}`);
    } else if (category === 'TV Series') {
      router.push(`/tv-series/${id}`);
    }
  };

  return (
    <li className='relative' key={`${item.id}`}>
      <div className='relative'>
        <div className='opacity-0 hover:opacity-100 absolute w-full h-full transition-opacity z-10'>
          <div className='absolute bg-white/25 rounded-[28.5px] py-2 pl-2 top-1/2 left-1/2 transform -translate-x-[55px] -translate-y-[25px] hover:scale-105 transition-transform'>
            <button
              onClick={() => handlePlayClick(item.category, item.id)}
              className='text-white flex gap-[19px] items-center pr-6'>
              <Image alt='play' src={play}></Image>
              Play
            </button>
          </div>
        </div>
        <img
          className='rounded-lg mb-2 w-full brightness-50'
          // need to remove poster images
          src={item.image}
          alt={item.title}
        />
      </div>
      <div onClick={() => handleBookmark(item)}>
        <BookmarkIcon isBookmarked={isBookmarked} />
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <div className='flex items-center gap-2'>
            <p className='text-white text-[12px] opacity-75 font-light'>
              {item.year}
            </p>
            <div className='w-[3px] h-[3px] rounded-full bg-white opacity-75'></div>
            <Image
              width={12}
              height={12}
              src={item.category === 'Movie' ? movieIcon : tvIcon}
              alt={item.category === 'Movie' ? 'movie icon' : 'tv icon'}
            />
            <p className='text-white text-[12px] opacity-75 font-light'>
              {item.category}
            </p>
            <div className='w-[3px] h-[3px] rounded-full bg-white opacity-75'></div>
            <p className='text-white text-[12px] opacity-75 font-light'>
              {item.rating}
            </p>
          </div>
        </div>
        <p className='text-white md:text-lg'>{item.title}</p>
      </div>
    </li>
  );
};

export default CardItem;
