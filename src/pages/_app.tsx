import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BagProvider } from '@contexts/BagContext';
import { BagStateProvider } from '@contexts/BagStateContext';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap');
  }, [])
  return (
    <>

      <BagProvider>
        <BagStateProvider>
          <Component {...pageProps} />
        </BagStateProvider>
      </BagProvider>
    </>)
}
