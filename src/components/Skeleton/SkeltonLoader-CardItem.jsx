import Skeleton from './Skeleton-CardItem';

const SkeletonLoader = ({ itemCount }) => {
  return (
    <div className='flex gap-4 md:gap-10 flex-nowrap'>
      {Array.from({ length: itemCount }, (_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
