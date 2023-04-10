import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import home from '../../public/assets/icon-nav-home.svg';
import movies from '../../public/assets/icon-nav-movies.svg';
import tv from '../../public/assets/icon-nav-tv-series.svg';
import bookmark from '../../public/assets/icon-nav-bookmark.svg';
import avatar from '../../public/assets/image-avatar.png';

const Nav = () => {
  return (
    <nav className='bg-semiDarkBlue flex justify-between items-center p-4'>
      <Link href={'/'}>
        <Image src={logo} width={25} height={20}></Image>
      </Link>
      <div className='flex gap-6 items-center'>
        <Link href={'/'}>
          <Image className='' src={home} width={16} height={16}></Image>
        </Link>
        <Link href={'/movies'}>
          <Image src={movies} width={16} height={16}></Image>
        </Link>
        <Link href={'/tv-series'}>
          <Image src={tv} width={16} height={16}></Image>
        </Link>
        <Link href={'/bookmarks'}>
          <Image src={bookmark} width={13.54} height={16}></Image>
        </Link>
      </div>
      <Image
        className='border rounded-full'
        src={avatar}
        width={24}
        height={24}></Image>
    </nav>
  );
};

export default Nav;
