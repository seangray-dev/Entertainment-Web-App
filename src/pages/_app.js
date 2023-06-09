import { BookmarksProvider } from '@/context/BookmarksContext';
import SearchContextProvider from '@/context/SearchContext';
import Nav from '@/components/Nav';
import { Outfit } from 'next/font/google';
import '@/styles/globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <div
        className={`${outfit.className} xl:grid xl:grid-cols-[96px_minmax(1185px,_1fr)]`}>
        <Nav />
        <BookmarksProvider>
          <main className='px-4 xl:pl-6 xl:pr-8'>
            <Component {...pageProps} />
          </main>
        </BookmarksProvider>
      </div>
    </SearchContextProvider>
  );
}
