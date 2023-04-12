import Search from '@/components/Search';
import data from '../data/data.json';
import Image from 'next/image';
import movieIcon from 'public/assets/icon-nav-movies.svg';
import tvIcon from 'public/assets/icon-nav-tv-series.svg';
import iconEmpty from 'public/assets/icon-bookmark-empty.svg';
import iconFull from 'public/assets/icon-bookmark-full.svg';
import play from 'public/assets/icon-play.svg';

const tvseries = () => {
  const tvSeries = data.filter((items) => items.category === 'TV Series');

  return (
    <section className='mt-10 pb-[61px] xl:ml-8'>
      <Search />
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        TV Series
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] xl:gap-10'>
        {tvSeries.map((item, index) => (
          <li className='relative' key={index}>
            <div className='relative'>
              <div className='opacity-0 hover:opacity-100 absolute w-full h-full transition-opacity'>
                <div className='absolute bg-white/25 rounded-[28.5px] py-2 pl-2 top-1/2 left-1/2 transform -translate-x-[55px] -translate-y-[25px] hover:scale-105 transition-transform'>
                  <button className='text-white flex gap-[19px] items-center pr-6'>
                    <Image src={play}></Image>
                    Play
                  </button>
                </div>
              </div>
              <img
                className='rounded-lg mb-2 md:hidden w-full'
                src={`/${item.thumbnail.regular.small}`}
              />
              <img
                className='hidden rounded-lg mb-2 md:block xl:hidden'
                src={`/${item.thumbnail.regular.medium}`}
              />
              <img
                className='hidden rounded-lg mb-2 md:hidden xl:block'
                src={`/${item.thumbnail.regular.large}`}
              />
              <div className='bookmark-wrapper absolute opacity-50 top-1 md:top-4 right-1 md:right-4 rotate-2 bg-black rounded-full p-2 hover:cursor-pointer hover:opacity-100 hover:bg-white hover:scale-105 transition-all'>
                <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    className='bookmark-path'
                    d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
                    stroke='#FFF'
                    stroke-width='1.5'
                    fill='none'
                  />
                </svg>
              </div>
            </div>
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
                    src={
                      item.category === 'Movie' ? movieIcon : tvIcon
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default tvseries;
