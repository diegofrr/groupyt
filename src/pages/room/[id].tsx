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

const Room: NextPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [width, setWidth] = useState<number>(0);
    const [counter, setCounter] = useState(0);

    const { query } = useRouter();
    const [roomDetails, setRoomDetails] = useState({
        name: 'Sala de Diêgo',
        users: [{ name: 'Diêgo', avatar: '' }, { name: 'João', avatar: '' }]
    });
    
    useEffect(() => {
        function updateDimensions() {
            setWidth(window.innerWidth);
        }
        function getDimensions() {
            updateDimensions();
            setCounter(1);
        }
        if(counter < 1) {
            updateDimensions();
            window.addEventListener('resize', getDimensions)
        }
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
                   {width > 800 && <Playlist />}
                </LeftContent>

                <RightContent>
                    {width <= 800 && <Playlist />}
                    <Chat />
                </RightContent>
            </Container>
        </>

    )
}

export default Room;