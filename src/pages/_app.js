import Nav from '@/components/Nav';
import { Outfit } from 'next/font/google';
import '@/styles/globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    // <div className={outfit.className}>
    <div className='xl:grid xl:grid-cols-[96px_1fr]'>
      <Nav />
      <main className='px-4 xl:pl-6 xl:pr-8'>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
