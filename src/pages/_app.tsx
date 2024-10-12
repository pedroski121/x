import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CurrentUserProvider } from '@contexts/CurrentUserContext';
import { NavBar } from '@components/general/navbar';
import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';
// import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <>
      <Head><meta name="google-site-verification" content="ln7EX1e8tszC5aHWpB5_EqOKpSe1DYHqROq3Jfsj-oA" /></Head>
      <ClerkProvider>
        {/* <CurrentUserProvider> */}
        <NavBar />
        <div className='mt-5'>
          <Component {...pageProps} />
        </div>
        {/* </CurrentUserProvider> */}
      </ClerkProvider>

    </>)
}



