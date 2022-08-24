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
    Container, LeftContent, RightContent
} from './styles';

import VideoiFrame from '../../components/VideoiFrame';
import Chat from '../../components/Chat';
import Playlist from '../../components/Playlist';
import { ModalContext } from '../../contexts/modal';

type RoomType = {
    roomName: string,
    users: UserType[],
}

interface RoomProps {
    roomDetails: RoomType
}

export default function Room(props: RoomProps) {
    const router = useRouter();

    const { user, setUser } = useContext(UserContext);
    const { modalIsOpen, setModalIsOpen, setModalType } = useContext(ModalContext);

    const [width, setWidth] = useState<number>(0);
    const [counter, setCounter] = useState(0);
    const { query } = useRouter();
    const [roomDetails, setRoomDetails] = useState<RoomType>(props.roomDetails);

    useEffect(() => {
        setModalIsOpen(false);
                
        if (user.name === undefined) {
            setModalIsOpen(true);
            setModalType('ENTER_TO_ROOM');
        }

    }, []);

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
                <title>{roomDetails.roomName}</title>
            </Head>
            {(modalIsOpen || user.name === undefined)
                ? <Modal />
                : <>
                    <Header roomName={roomDetails.roomName} />
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

    // await firebase.firestore().collection('rooms')
    // .doc(String(roomId))
    // .get()
    // .then(snapshot => {
    //     if(snapshot.exists) {
    //         roomDetails.roomName = snapshot.data()?.roomName;
    //     } 
    // });

    // if(roomDetails.roomName !== undefined) {
    //     await firebase.firestore().collection('rooms')
    //     .doc(String(roomId))
    //     .collection('users')
    //     .get()
    //     .then(snapshot => {
    //         let users = [] as UserType[];
    //         snapshot.forEach(item => {
    //             users.push({
    //                 id: item.id,
    //                 admin: item.data().admin,
    //                 avatarURL: item.data().avatarURL,
    //                 name: item.data().name,
    //             })
    //         });
    //         roomDetails.users = users;
    //     });

    //     console.log(roomDetails)

    // } else {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         }
    //     }
    // }


    roomDetails = {
        roomName: 'Minha sala',
        users: [
            {
                id: 'LdRiNdcSZ8ni2bl7soSR',
                admin: true,
                avatarURL: '/images/avatars/male/avatar16.png',
                name: 'Diêgo'
            }
        ]
    }

    return {
        props: {
            roomDetails
        }
    }
}