import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BagProvider } from '@contexts/BagContext';
import { CurrentUserProvider } from '@contexts/CurrentUserContext';


export default function App({ Component, pageProps:{...pageProps} }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap');
  }, [])
  return (
    <>
    <CurrentUserProvider>
      <BagProvider>
        <Component {...pageProps} />
      </BagProvider>
      </CurrentUserProvider>
    </>)
}


