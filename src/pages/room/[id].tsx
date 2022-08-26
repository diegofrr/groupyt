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
        setVideos(props.roomDetails.playlist);
        setModalIsOpen(false);
        setRoomId(props.roomDetails.roomId);
        setRoomName(props.roomDetails.roomName);
                
        if (user.name === undefined) {
            setModalIsOpen(true);
            setModalType('ENTER_TO_ROOM');
        }

    }, []);

    useEffect(() => {
        (async () => {
            await firebase.firestore().collection('rooms')
            .doc(props.roomDetails.roomId)
            .set({
                roomName,
                playlist: videos,
            })
        })();
    }, [videos]);

    useEffect(() => {
    }, [user])

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
        if(snapshot.exists) {
            roomDetails.roomName = snapshot.data()?.roomName;
            roomDetails.playlist = snapshot.data()?.playlist;
        } 
    });

    if(roomDetails.roomName !== undefined) {
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
    //     roomName: 'Minha sala',
    //     users: [
    //         {
    //             id: 'LdRiNdcSZ8ni2bl7soSR',
    //             admin: true,
    //             avatarURL: '/images/avatars/male/avatar16.png',
    //             name: 'Diêgo'
    //         }
    //     ],
    //     playlist: [
    //         {
    //             "id": "2fJYeOr3b2s",
    //             "creator": "sasbo",
    //             "thumb": "https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg",
    //             "title": "[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside"
    //         },
    //         {
    //             "id": "OZRYzH0Q0pU",
    //             "creator": "Men I Trust",
    //             "thumb": "https://i.ytimg.com/vi/OZRYzH0Q0pU/mqdefault.jpg",
    //             "title": "Min I Trust - Show me How"
    //         }

    //     ]
    // }

    return {
        props: {
            roomDetails
        }
    }
}