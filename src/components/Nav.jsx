import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import avatar from '../../public/assets/image-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchIconClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    searchInputRef.current?.focus();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='xl:ml-8 sticky top-0 left-0 z-50'>
      <nav className='bg-semiDarkBlue flex justify-between items-center p-4 xl:flex-col xl:rounded-[20px] xl:justify-normal xl:p-0 xl:fixed xl:w-[96px] vhscreen xl:mt-8'>
        <Link href={'/'}>
          <Image
            className='xl:mb-[75px] xl:mt-9 xl:w-[32px] xl:h-[25.6px]'
            src={logo}
            alt='logo'
            width={25}
            height={20}
          />
        </Link>
        <div className='flex gap-6 items-center xl:flex-col xl:gap-10 xl:flex-grow'>
          <Link className='fill-red w-[16px] h-[16px]' href={'/'}>
            <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={router.pathname === '/' ? 'fill-red' : ''}
                d='M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z'
                fill='#5A698F'
              />
            </svg>
          </Link>
          <Link className='fill-red w-[16px] h-[16px]' href={'/movies'}>
            <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={
                  router.pathname.includes('/movies') ? 'fill-red' : ''
                }
                d='M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z'
                fill='#5A698F'
              />
            </svg>
          </Link>
          <Link className='fill-red w-[16px] h-[16px]' href={'/tv-series'}>
            <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={
                  router.pathname.includes('/tv-series') ? 'fill-red' : ''
                }
                d='M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z'
                fill='#5A698F'
              />
            </svg>
          </Link>
          <Link className='fill-red w-[16px] h-[16px]' href={'/bookmarks'}>
            <svg width='17' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                className={router.pathname === '/bookmarks' ? 'fill-red' : ''}
                d='M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z'
                fill='#5A698F'
              />
            </svg>
          </Link>
          <button
            className='fill-red hidden xl:block'
            onClick={handleSearchIconClick}>
            <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z'
                fill='#5A698F'
              />
            </svg>
          </button>
        </div>
        <div className='relative'>
          <FontAwesomeIcon
            icon={faUser}
            size='lg'
            className='cursor-pointer xl:mb-8 text-grayishBlue hover:text-red transition-colors'
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div class='absolute -top-1 right-10 bg-DarkBlue xl:bg-semiDarkBlue rounded-full xl:-right-20 xl:top-1'>
              <a
                href='#'
                className='block px-4 py-2 text-white text-xs hover:underline hover:text-red'>
                Logout
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
