import type { AppProps } from 'next/app';
import '@fontsource/plus-jakarta-sans';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
