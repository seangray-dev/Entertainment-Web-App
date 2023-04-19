import ScrollCardItem from './ScrollCardItem';

const MovieSection = ({ title, items, bookmarks, handleBookmark }) => {
  return (
    <section>
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        {title}
      </h2>
      <div className='flex overflow-x-scroll hide-scroll-bar snap-x snap-mandatory'>
        <div className='flex flex-nowrap'>
          <ul className='flex gap-4 md:gap-10 flex-nowrap'>
            {items.map((item, index) => (
              <ScrollCardItem
                key={`${item.id}${index}`}
                item={item}
                updatedBookmarks={bookmarks}
                handleBookmark={handleBookmark}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
