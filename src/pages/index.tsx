import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Container,
  Content,
  LogoContainer,
  Description,
  ButtonsContainer,
  Button,
  ButtonText,
  BackImage,
  BackImage2,

} from '../styles/home';

import Modal from '../components/Modal';
import logo from '../../public/images/groupyt_logo.svg';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ModalContext } from '../contexts/modal';

const Home: NextPage = () => {

  const { modalIsOpen, setModalIsOpen, setModalType } = useContext(ModalContext);
  const [loadingPage, setLoadingPage] = useState(true);

  const handleCreateNewRoom = () => {
    setModalType('CREATE_NEW_ROOM');
    setModalIsOpen(true);
  }

  const handleEnterToRoom = () => { 
    setModalType('ENTER_TO_ROOM');
    setModalIsOpen(true);
  }

  const openModal = (t: boolean) => {
    setModalIsOpen(t);
  }

  return (
    <>
      <Head>
        <title>Groupyt</title>
      </Head>

      <Container>

        {modalIsOpen
          ? <Modal />
          : <Content>
            <LogoContainer>
              <Image
                src={logo}
                alt='Gorupyt Logo'
              />
            </LogoContainer>

            <Description>
              Assista vídeos do Youtube com seus amigos.
            </Description>

            <ButtonsContainer>
              <Button onClick={handleCreateNewRoom} primary>
                <ButtonText primary>
                  Criar uma sala
                </ButtonText>
              </Button>
            </ButtonsContainer>

          </Content>}

      </Container>

      <BackImage src='/images/backvector.png' />
      <BackImage2 src='/images/backvector.png' />

    </>
  )
}

export default Home;
