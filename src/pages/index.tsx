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
  RepositoryLink,

} from '../styles/home';

import Modal from '../components/Modal';
import logo from '../../public/images/groupyt_logo.svg';
import Image from 'next/image';
import { GoMarkGithub } from 'react-icons/go';
import { useContext } from 'react';
import { ModalContext } from '../contexts/modal';
import { myColor_300 } from '../styles/variables';

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
              Assista vídeos do Youtube em grupo.
            </Description>

            <ButtonsContainer>
              <Button style={{ minHeight: 50 }} onClick={handleCreateNewRoom} primary>
                <ButtonText primary>
                  Criar uma sala
                </ButtonText>
              </Button>
            </ButtonsContainer>

          </Content>}
        <RepositoryLink target='_blank' href='https://github.com/diegofrr/groupyt'>
          <GoMarkGithub size={14} color={myColor_300} />
          Repositório
        </RepositoryLink>
      </Container>

      <BackImage src='/images/backvector.png' />

    </>
  )
}

export default Home;
