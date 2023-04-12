import data from '../data/data.json';
import Image from 'next/image';
import movieIcon from 'public/assets/icon-nav-movies.svg';
import tvIcon from 'public/assets/icon-nav-tv-series.svg';
import iconEmpty from 'public/assets/icon-bookmark-empty.svg';
import iconFull from 'public/assets/icon-bookmark-full.svg';

const Trending = () => {
  const trending = data.filter((items) => items.isTrending);

  return (
    <section className='mt-6'>
      <h2 className='text-white text-xl font-light mb-4'>Trending</h2>
      <div className='flex overflow-x-scroll hide-scroll-bar scroll-smooth'>
        <div className='flex flex-nowrap'>
          <ul className='flex gap-4 md:gap-10 flex-nowrap'>
            {trending.map((item, index) => (
              <li key={index} className='inline-block relative'>
                <div className='w-60 h-[140px] md:w-[470px] md:h-[230px] overflow-hidden rounded-lg bg-white'>
                  <img
                    className='hidden md:block'
                    src={`/${item.thumbnail.trending.large}`}
                  />
                  <img
                    className='md:hidden'
                    src={`/${item.thumbnail.trending.small}`}
                  />
                  <div className='absolute opacity-50 top-1 right-1 rotate-2 bg-black rounded-full p-2 hover:cursor-pointer hover:scale-105'>
                    <Image src={iconEmpty}></Image>
                  </div>
                  <div className='absolute bottom-2 left-2'>
                    <div className='flex items-center justify-between'>
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
                        <p className='text-white'>{item.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <ul className='flex gap-4 overflow-x-scroll'>
        {trending.map((item, index) => (
          <li className='relative' key={index}>
            <Image
              width={240}
              height={140}
              className='w-[240px] rounded-lg'
              src={`/${item.thumbnail.trending.small}`}
              alt={item.title}
            />
            <div className='absolute opacity-50 top-1 right-1 rotate-2 bg-black rounded-full p-2 hover:cursor-pointer hover:scale-105'>
              <Image src={iconEmpty}></Image>
            </div>
            <div className='absolute bottom-2 left-2'>
              <div className='flex items-center justify-between'>
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
                  <p className='text-white'>{item.title}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default Trending;
