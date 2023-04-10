import Search from '@/components/Search';
import Trending from '@/components/Trending';
import Recommended from '@/components/Recommended';

export default function Home() {
  return (
    <div className='xl:ml-8'>
      <Search />
      <Trending />
      <Recommended />
    </div>
  );
}
