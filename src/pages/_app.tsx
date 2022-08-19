import type { AppProps } from 'next/app';
import '@fontsource/plus-jakarta-sans';
import '../styles/global.css';
import ModalProvider from '../contexts/modal';
import UserProvider from '../contexts/user';
import PlaylistProvider from '../contexts/playlist';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ModalProvider>
      <UserProvider>
        <PlaylistProvider>
          <Component {...pageProps} />
        </PlaylistProvider>
      </UserProvider>
    </ModalProvider>
  </>
}

export default MyApp
