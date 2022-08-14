import type { AppProps } from 'next/app';
import '@fontsource/plus-jakarta-sans';
import '../styles/global.css';
import ModalProvider from '../context/modal';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  </>
}

export default MyApp
