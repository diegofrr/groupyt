import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import firebase from '../../services/firebase';
import { UserContext } from '../../contexts/user';
import Header from '../../components/Header';
import Head from 'next/head';
import { UserType } from '../../contexts/user';
import Modal from '../../components/Modal';
import { MessageType } from '../../components/Chat';
import {
    Container,
    LeftContent,
    RightContent
} from './styles';

import VideoiFrame from '../../components/VideoiFrame';
import Chat from '../../components/Chat';
import Playlist, { VideoType } from '../../components/Playlist';
import { ModalContext } from '../../contexts/modal';
import { RoomDetailsContext } from '../../contexts/roomDetails';

type RoomType = {
    roomName: string,
    roomId: string,
    users: UserType[],
    playlist: VideoType[],
}

type LocalCredentials = {
    roomId: string,
    user: UserType
}

interface RoomProps {
    roomDetails: RoomType
}

export default function Room(props: RoomProps) {
    const router = useRouter();

    const { user, setUser } = useContext(UserContext);
    const { modalIsOpen, setModalIsOpen, setModalType } = useContext(ModalContext);
    const { setVideos, videos, roomName, setRoomName, setRoomId } = useContext(RoomDetailsContext);
    const [width, setWidth] = useState<number>(0);
    const [counter, setCounter] = useState(0);
    const { query } = useRouter();

    useEffect(() => {
        checkRoomsCredentials();
        setModalIsOpen(false);
        setVideos(props.roomDetails.playlist);
        setRoomId(props.roomDetails.roomId);
        setRoomName(props.roomDetails.roomName);

        if (user.name === undefined) {
            setModalIsOpen(true);
            setModalType('ENTER_TO_ROOM');
        }

        (async () => {
            await firebase.firestore().collection('rooms')
                .doc(props.roomDetails.roomId)
                .onSnapshot(e => {
                    setVideos(e.data()?.playlist)
                })
        })()

    }, [user]);


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

    const checkRoomsCredentials = () => {
        const oldData = JSON.parse(localStorage.getItem('@rooms_credentials') || '[]') as LocalCredentials[];
        if (!oldData.some(item => item.roomId === query?.id)) {
            localStorage.setItem('@rooms_credentials', JSON.stringify(
                [...oldData, { roomId: query?.id, user: user }]
            ));
        } else {
            setUser(oldData.filter(item => item.roomId === query.id)[0].user);
        }
    }

    return (
        <>
            <Head>
                <title>{roomName}</title>
            </Head>
            {(modalIsOpen || user.name === undefined)
                ? <Modal />
                : <>
                    <Header roomName={roomName} />
                    <Container>
                        <LeftContent>
                            <VideoiFrame />
                            {width > 800 && <Playlist />}
                        </LeftContent>

                        <RightContent>
                            {width <= 800 && <Playlist />}
                            <Chat />
                        </RightContent>
                    </Container>
                </>}
        </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const roomId = params?.id;
    let roomDetails = {} as RoomType;
    roomDetails.roomId = String(roomId);

    await firebase.firestore().collection('rooms')
        .doc(String(roomId))
        .get()
        .then(snapshot => {
            if (snapshot.exists) {
                roomDetails.roomName = snapshot.data()?.roomName;
                roomDetails.playlist = snapshot.data()?.playlist;
            }
        });

    if (roomDetails.roomName !== undefined) {
        await firebase.firestore().collection('rooms')
            .doc(String(roomId))
            .collection('users')
            .get()
            .then(snapshot => {
                let users = [] as UserType[];
                snapshot.forEach(item => {
                    users.push({
                        id: item.id,
                        admin: item.data().admin,
                        avatarURL: item.data().avatarURL,
                        name: item.data().name,
                    })
                });
                roomDetails.users = users;
            });

    } else {
        return {
            redirect: {
                destination: '/not-found',
                permanent: false,
            }
        }
    }

    return {
        props: {
            roomDetails
        }
    }
}