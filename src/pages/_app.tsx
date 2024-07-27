import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BagProvider } from '@contexts/BagContext';
import { CurrentUserProvider } from '@contexts/CurrentUserContext';
import { NavBar } from '@components/general/navbar';

// import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <>
      <CurrentUserProvider>
        <BagProvider>
          <NavBar />
          <div className='mt-5'>
            <Component {...pageProps} />
          </div>
        </BagProvider>
      </CurrentUserProvider>
      {/* <UserProvider>
        <BagProvider>
          <NavBar />
          <div className='mt-5'>
            <Component {...pageProps} />
          </div>
        </BagProvider>
      </UserProvider> */}
    </>)
}



