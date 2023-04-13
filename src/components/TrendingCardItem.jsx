import Image from 'next/image';
import movieIcon from 'public/assets/icon-nav-movies.svg';
import tvIcon from 'public/assets/icon-nav-tv-series.svg';
import play from 'public/assets/icon-play.svg';

const TrendingCardItem = ({ item, updatedBookmarks, handleBookmark }) => {
  return (
    <li className='inline-block relative snap-start' key={`${item.id}`}>
      <div className='relative w-60 h-[140px] md:w-[470px] md:h-[230px] overflow-hidden rounded-lg bg-white'>
        <div className='opacity-0 hover:opacity-100 absolute w-full h-full transition-opacity'>
          <div className='absolute bg-white/25 rounded-[28.5px] py-2 pl-2 top-1/2 left-1/2 transform -translate-x-[55px] -translate-y-[25px] hover:scale-105 transition-transform'>
            <button className='text-white flex gap-[19px] items-center pr-6'>
              <Image alt='play' src={play}></Image>
              Play
            </button>
          </div>
        </div>
        <img
          className='hidden md:block'
          src={`/${item.thumbnail.trending.large}`}
        />
        <img className='md:hidden' src={`/${item.thumbnail.trending.small}`} />
      </div>
      <div onClick={() => handleBookmark(item)}>
        {updatedBookmarks.includes(item) ? (
          <div className='bookmark-active absolute opacity-50 top-1 md:top-4 right-1 md:right-4 bg-black rounded-full p-2 hover:cursor-pointer hover:opacity-100 hover:bg-white transition-all'>
            <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
              <path
                className='bookmark-path'
                d='M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z'
                fill='#FFF'
              />
            </svg>
          </div>
        ) : (
          <div className='bookmark-inactive absolute opacity-50 top-1 md:top-4 right-1 md:right-4 rotate-2 bg-black rounded-full p-2 hover:cursor-pointer hover:opacity-100 hover:bg-white transition-all'>
            <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
              <path
                className='bookmark-path'
                d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
                stroke='#FFF'
                strokeWidth='1.5'
                fill='none'
              />
            </svg>
          </div>
        )}
      </div>
      <div className='absolute bottom-4 left-4 md:bottom-6 md:left-6'>
        <div className='flex flex-col'>
          <div className='flex gap-2'>
            <div className='flex items-center'>
              <p className='text-white text-[12px] opacity-75 font-light'>
                {item.year}
              </p>
              <div className='ml-2 w-[3px] h-[3px] rounded-full bg-white opacity-75'>
                {' '}
              </div>
            </div>
            <div className='flex items-center gap-[6px]'>
              <Image
                width={12}
                height={12}
                src={item.category === 'Movie' ? movieIcon : tvIcon}
                alt={
                  item.category === 'Movie' ? 'movie icon' : 'tv icon'
                }></Image>
              <p className='text-white text-[12px] opacity-75 font-light'>
                {item.category}
              </p>
              <div className='flex items-center gap-[6px]'>
                <div className='w-[3px] h-[3px] rounded-full bg-white opacity-75'>
                  {' '}
                </div>
                <p className='text-white text-[12px] opacity-75 font-light'>
                  {item.rating}
                </p>
              </div>
            </div>
          </div>
          <p className='text-white md:text-lg'>{item.title}</p>
        </div>
      </div>
    </li>
  );
};

export default TrendingCardItem;
