import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Container,
  Content,
  LogoContainer,
  AppDescription,
  ButtonsContainer,
  Button,
  ButtonText,
  BackImage,
  BackImage2,


} from '../styles/home';

import logo from '../../public/images/groupyt_logo.svg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Container>

        <Content>

          <LogoContainer>
            <Image
              src={logo}
              alt='Gorupyt Logo'
            />
          </LogoContainer>

          <AppDescription>
            Assista vídeos do Youtube com seus amigos.
          </AppDescription>

          <ButtonsContainer>
            <Button primary>
              <ButtonText primary>
                Criar uma sala
              </ButtonText>
            </Button>

            <Button primary={false}>
              <ButtonText primary={false}>
                Entrar em uma sala
              </ButtonText>
            </Button>
          </ButtonsContainer>

        </Content>

      </Container>

      <BackImage src='/images/backvector.png' />
      <BackImage2 src='/images/backvector.png' />

    </>
  )
}

export default Home;
