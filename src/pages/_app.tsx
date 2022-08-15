import type { AppProps } from 'next/app';
import '@fontsource/plus-jakarta-sans';
import '../styles/global.css';
import ModalProvider from '../context/modal';
import UserProvider from '../context/user';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ModalProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ModalProvider>
  </>
}

export default MyApp
