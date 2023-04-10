import Search from '@/components/Search';
import Trending from '@/components/Trending';
import Recommended from '@/components/Recommended';

export default function Home() {
  return (
    <div>
      <Search />
      <Trending />
      <Recommended />
    </div>
  );
}
