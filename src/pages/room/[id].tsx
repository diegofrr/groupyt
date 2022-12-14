import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';

import firebase from '../../services/firebase';

import Header from '../../components/roomComponents/Header';
import Modal from '../../components/Modal';
import VideoiFrame from '../../components/roomComponents/VideoiFrame';
import Chat from '../../components/roomComponents/Chat';
import Playlist from '../../components/roomComponents/Playlist';

import {
    Container,
    Content,
    LeftContent,
    RightContent
} from './styles';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/user';
import { ModalContext } from '../../contexts/modal';
import { RoomType, LocalCredentials, UserType } from '../../utils/types';
import { RoomDetailsContext } from '../../contexts/roomDetails';

interface RoomProps {
    roomDetails: RoomType
}

export default function Room(props: RoomProps) {
    const router = useRouter();

    const { user, setUser } = useContext(UserContext);
    const { modalIsOpen, setModalIsOpen, setModalType } = useContext(ModalContext);
    const { setVideos, videos, roomName, setRoomName, setRoomId, setUsers } = useContext(RoomDetailsContext);
    const [width, setWidth] = useState<number>(0);
    const [counter, setCounter] = useState(0);
    const { query } = useRouter();

    useEffect(() => {
        setModalIsOpen(false);
        setVideos(props.roomDetails.playlist);
        setRoomId(props.roomDetails.roomId);
        setRoomName(props.roomDetails.roomName);
        setUsers(props.roomDetails.users);

        if (user.name === undefined) {
            setModalIsOpen(true);
            setModalType('ENTER_TO_ROOM');
        }

    }, [
        user, props.roomDetails.playlist, props.roomDetails.roomId,
        props.roomDetails.roomName, props.roomDetails.users,
        setUsers, setModalIsOpen, setModalType, setRoomId, setRoomName, setVideos,
    ]);

    useEffect(() => {

        const checkRoomsCredentials = () => {
            const oldData = JSON.parse(localStorage.getItem('@rooms_credentials') || '[]') as LocalCredentials[];

            if (!oldData.some(item => item.roomId === query?.id)) {
                if (user.name !== undefined) {
                    localStorage.setItem('@rooms_credentials', JSON.stringify(
                        [...oldData, { roomId: query?.id, userId: user.id }]
                    ));
                }
            } else {
                const userId = oldData.filter(item => item.roomId === query?.id)[0]?.userId;
                (async () => {
                    await firebase.firestore().collection('rooms')
                        .doc(String(query?.id)).collection('users')
                        .get().then(snapshot => {
                            snapshot.forEach(item => {
                                if (item.id === userId) {
                                    setUser({
                                        id: item.id,
                                        admin: item.data().admin,
                                        avatarURL: item.data().avatarURL,
                                        name: item.data().name,
                                    } as UserType);
                                }
                            })
                        })
                })();

            }
        }

        checkRoomsCredentials();

        (async () => {
            await firebase.firestore().collection('rooms')
                .doc(props.roomDetails.roomId)
                .onSnapshot(e => {
                    setVideos(e.data()?.playlist)
                })
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.roomDetails.roomId, query.id, setUser, setVideos, user])

    useEffect(() => {
        function updateDimensions() {
            setWidth(window.innerWidth);
        }
        function getDimensions() {
            updateDimensions();
        }
        updateDimensions();
        window.addEventListener('resize', getDimensions)
    }, []);

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
                        <Content>
                            <LeftContent>
                                <VideoiFrame />
                                {width > 800 && <Playlist />}
                            </LeftContent>

                            <RightContent>
                                {width <= 800 && <Playlist />}
                                <Chat />
                            </RightContent>
                        </Content>
                    </Container>
                </>}
        </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const roomId = params?.id;

    if (roomId === undefined) return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }

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

    // roomDetails = {
    //     roomId: 'RSX51HSgpPpUJxERJqPq',
    //     roomName: 'Minha sala',
    //     playlist: [],
    //     users: [
    //         {
    //             id: 'JJ1BmSwcZ59zqXHEjbB1',
    //             admin: false,
    //             avatarURL: '/images/avatars/female/avatar2.png',
    //             name: 'fafsfsd'
    //         },
    //         {
    //             id: 'ZMSzElALVt5XUVw60KUm',
    //             admin: true,
    //             avatarURL: '/images/avatars/female/avatar1.png',
    //             name: 'dddeee'
    //         }
    //     ]
    // }

    return {
        props: {
            roomDetails
        }
    }
}