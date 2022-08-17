import React, { useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import firebase from '../../services/firebase';
import { UserContext } from '../../context/user';
import Header from '../../components/Header';
import Head from 'next/head';
import {
    Container, LeftContent, RightContent
} from './styles';

import VideoiFrame from '../../components/VideoiFrame';
import Chat from '../../components/Chat';
import Playlist from '../../components/Playlist';
import useWindowDimensions from '../../components/CustomHooks/useWindowDimensions';

const Room: NextPage = () => {
    const { user, setUser } = useContext(UserContext);

    const { query } = useRouter();
    const [roomDetails, setRoomDetails] = useState({
        name: 'Sala de Diêgo',
        users: [{ name: 'Diêgo', avatar: '' }, { name: 'João', avatar: '' }]
    });


    return (
        <>
            <Head>
                <title>{roomDetails.name}</title>
            </Head>
            <Header roomName={roomDetails.name} />
            <Container>
                <LeftContent>
                   <VideoiFrame videoID='eKb-ZvqTx9o' />
                   {useWindowDimensions().width > 800 && <Playlist />}
                </LeftContent>

                <RightContent>
                    {useWindowDimensions().width <= 800 && <Playlist />}
                    <Chat />
                </RightContent>
            </Container>
        </>

    )
}

export default Room;