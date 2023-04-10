import Nav from '@/components/Nav';
import { Outfit } from 'next/font/google';
import '@/styles/globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={outfit.className}>
      <Nav />
      <main className='px-4'>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
