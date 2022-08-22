import React, { useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import firebase from '../../services/firebase';
import { UserContext } from '../../contexts/user';
import Header from '../../components/Header';
import Head from 'next/head';
import { UserType } from '../../contexts/user';
import Modal from '../../components/Modal';
import {
    Container, LeftContent, RightContent
} from './styles';

import VideoiFrame from '../../components/VideoiFrame';
import Chat from '../../components/Chat';
import Playlist from '../../components/Playlist';
import { ModalContext } from '../../contexts/modal';

type RoomType = {
    roomName: string,
}

const Room: NextPage = () => {
    const router = useRouter();

    const { user, setUser } = useContext(UserContext);
    const { setModalIsOpen, setModalType } = useContext(ModalContext);

    const [width, setWidth] = useState<number>(0);
    const [counter, setCounter] = useState(0);
    const { query } = useRouter();
    const [roomDetails, setRoomDetails] = useState<RoomType>({} as RoomType);

    useEffect(() => {
        setModalIsOpen(false);

        if (Object.keys(user).length === 0) {
            setModalIsOpen(true);
            setModalType('ENTER_TO_ROOM');
        }

    }, [])

    useEffect(() => {
        (async () => {
            let roomId = query?.id;
            await firebase.firestore().collection('rooms')
                .doc(String(roomId))
                .get()
                .then(e => {
                    if(!e.data()?.details) {
                        router.push('/');
                        setModalIsOpen(false)
                    }
                })
        })();
    })

    useEffect(() => {
        function updateDimensions() {
            setWidth(window.innerWidth);
        }
        function getDimensions() {
            updateDimensions();
            setCounter(1);
        }
        if (counter < 1) {
            updateDimensions();
            window.addEventListener('resize', getDimensions)
        }
    }, [counter]);

    return (
        <>
            <Head>
                <title>{roomDetails.roomName}</title>
            </Head>
            <Header roomName={roomDetails.roomName} />
            <Container>
                {Object.keys(user).length === 0
                    ? <Modal />
                    : <>
                        <LeftContent>
                            <VideoiFrame />
                            {width > 800 && <Playlist />}
                        </LeftContent>

                        <RightContent>
                            {width <= 800 && <Playlist />}
                            <Chat />
                        </RightContent>
                    </>}
            </Container>
        </>

    )
}

export default Room;