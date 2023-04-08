import { useState } from 'react';
import { useSession } from 'next-auth';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Login from './Login';
import SignUp from './SignUp';

import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  // const [session, loading] = useSession();
  // const [error, setError] = useState('');

  // if (loading) return <div>Loading...</div>;

  // if (!session) {
  //   return <Login />;
  // }

  return (
    <>
      <div className={outfit.className}>
        <Login />
        {/* <Nav />
      <Component {...pageProps} />
      <Footer /> */}
      </div>
    </>
  );
}
