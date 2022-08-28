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

} from '../styles/home';

import Modal from '../components/Modal';
import logo from '../../public/images/groupyt_logo.svg';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ModalContext } from '../contexts/modal';

const Home: NextPage = () => {

  const { modalIsOpen, setModalIsOpen, setModalType } = useContext(ModalContext);

  const handleCreateNewRoom = () => {
    setModalType('CREATE_NEW_ROOM');
    setModalIsOpen(true);
  }

  return (
    <>
      <Head>
        <title>Bem vindo(a) ao Groupyt!</title>
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
              <Button style={{minHeight: 50}} onClick={handleCreateNewRoom} primary>
                <ButtonText primary>
                  Criar uma sala
                </ButtonText>
              </Button>
            </ButtonsContainer>

          </Content>}

      </Container>

      <BackImage src='/images/backvector.png' />

    </>
  )
}

export default Home;
