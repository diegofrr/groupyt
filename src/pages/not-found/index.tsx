import React, { } from 'react';
import { NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';
import notfound from '../../../public/images/notfound.svg'
import {
    Container,
    Content,
    NotFoundDescription,
    ButtonsContainer,
    Button,
    ButtonText,
    BackImage,

} from '../../styles/home';
import { useRouter } from 'next/router';

const NotFoundRoom: NextPage = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Sala não encontrada</title>
            </Head>

            <Container>
                <Content>
                    <Image
                        height={300}
                        src={notfound}
                        alt='Not found image'
                    />
                    <NotFoundDescription>
                        Esta sala não existe :(
                    </NotFoundDescription>
                    <ButtonsContainer>
                        <Button onClick={() => router.push('/')} primary>
                            <ButtonText primary>
                                Voltar para a o início
                            </ButtonText>
                        </Button>
                    </ButtonsContainer>

                </Content>

            </Container>

            <BackImage src='/images/backvector.png' />
        </>
    )

}

export default NotFoundRoom;