import { useState } from 'react';
import { useRouter } from 'next/router';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as fasFaStar,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as farFaStar,
  faStarHalfAlt,
} from '@fortawesome/free-regular-svg-icons';

const ItemDetail = ({ item }) => {
  const router = useRouter();
  const [showAllCast, setShowAllCast] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleShowMoreCast = () => {
    setShowAllCast(!showAllCast);
  };

  const ratingOutOf5 = parseFloat(item.rating) / 2;

  // Generate star elements
  const generateStars = (rating) => {
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon key={`full-${i}`} icon={fasFaStar} />
          ))}
        {halfStar ? <FontAwesomeIcon icon={faStarHalfAlt} /> : null}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon key={`empty-${i}`} icon={farFaStar} />
          ))}
      </>
    );
  };

  return (
    <section className='mt-4 xl:ml-8 xl:mt-16'>
      <div className=' text-white flex flex-col justify-center gap-6 pb-10 md:grid md:grid-cols-[1fr,_2fr] md:gap-8 md:max-w-screen-xl md:mx-auto'>
        <div>
          <button
            className='text-white text-left mb-6 hover:text-red hover:opacity-100 transition-all hover:scale-[1.1]'
            onClick={handleGoBack}>
            <FontAwesomeIcon className='pr-2' icon={faArrowLeft} size='xl' />
          </button>
          <img
            className='mx-auto rounded-lg md:mx-0 max-w-[240px] md:max-w-full'
            src={item.poster}
            alt={item.title}
          />
        </div>
        <div className='flex flex-col gap-4 md:pt-12'>
          <h1 className='text-3xl text-center md:text-left md:text-4xl xl:text-5xl'>
            {item.title}
          </h1>
          <h2 className='opacity-50 font-light text-center md:text-left md:text-lg'>
            {item.tagline}
          </h2>
          <div className='flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0'>
            <p className='text-4xl'>{parseFloat(ratingOutOf5).toFixed(1)}</p>
            <div className='flex text-xl text-red'>
              {generateStars(ratingOutOf5)}{' '}
            </div>
          </div>
          <div className='flex gap-12 mx-auto md:mx-0 items-center text-sm md:text-base'>
            <div className='flex flex-col gap-1 items-center'>
              <p className='opacity-50'>Length</p>
              <p>{item.length ? item.length + ' min.' : 'N/A'}</p>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='opacity-50'>Year</p>
              <p>{item.year}</p>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='opacity-50'>Language</p>
              <p className='uppercase'>{item.language}</p>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='opacity-50'>Status</p>
              <p>{item.status}</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <p className='font-lg mb-1'>Genres</p>
              <div className='flex gap-2 flex-wrap text-sm md:text-base'>
                {item.genres.map((genre, index) => (
                  <span
                    key={index}
                    className='bg-semiDarkBlue py-1 px-2 rounded-xl text-sm tracking-wider text-grayishBlue '>
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h6 className='font-lg mb-1'>Synopsis</h6>
              <p className='font-light'>{item.synopsis}</p>
            </div>
            <div className='flex flex-col gap-1 text-sm md:text-base'>
              <p className='text-lg mb-1'>Cast</p>
              <div className='flex gap-2 flex-wrap'>
                {item.cast.map((actor, index) => {
                  if (!showAllCast && index >= 10) return null;

                  return (
                    <span
                      key={index}
                      className='bg-semiDarkBlue text-grayishBlue tracking-wider  rounded-lg px-2 py-1 text-sm'>
                      {actor}
                    </span>
                  );
                })}
                <button
                  className='mt-2 text-white text-sm underline opacity-50'
                  onClick={handleShowMoreCast}>
                  {showAllCast ? 'Show Less' : 'Show More...'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
