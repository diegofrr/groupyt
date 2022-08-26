import type { AppProps } from 'next/app';
import '@fontsource/plus-jakarta-sans';
import '../styles/global.css';
import ModalProvider from '../contexts/modal';
import UserProvider from '../contexts/user';
import { Toaster } from 'react-hot-toast'
import RoomDetailsProvider from '../contexts/roomDetails';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ModalProvider>
      <UserProvider>
        <RoomDetailsProvider>
          <Toaster position='top-center' toastOptions={{
            duration: 3000,
          }} />
          <Component {...pageProps} />
        </RoomDetailsProvider>
      </UserProvider>
    </ModalProvider>
  </>
}

export default MyApp
