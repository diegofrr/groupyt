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
}

type ResponseRoom = {
    roomName: string,
    users: UserType[],
    messages: MessageType[]
}

export default function Room(props: ResponseRoom) {
    const router = useRouter();

    const { user, setUser } = useContext(UserContext);
    const { setModalIsOpen, setModalType } = useContext(ModalContext);

    const [width, setWidth] = useState<number>(0);
    const [counter, setCounter] = useState(0);
    const { query } = useRouter();
    const [roomDetails, setRoomDetails] = useState<RoomType>({
        roomName: 'Sala de José'
    } as RoomType);

    useEffect(() => {
        setModalIsOpen(false);

        if (Object.keys(user).length === 0) {
            setModalIsOpen(true);
            setModalType('ENTER_TO_ROOM');
        }

    }, [])

    useEffect(() => {
    }, [user])

    // useEffect(() => {
    //     (async () => {
    //         let roomId = query?.id;
    //         await firebase.firestore().collection('rooms')
    //             .doc(String(roomId))
    //             .get()
    //             .then(e => {
    //                 if(!e.data()?.details) {
    //                     router.push('/');
    //                     setModalIsOpen(false)
    //                 }
    //             })
    //     })();
    // })

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

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const roomId = params?.id;
    let roomDetails = {} as ResponseRoom;

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
    //             users.push(item.data() as UserType)
    //         });
    //         roomDetails.users = users;
            
    //         firebase.firestore().collection('rooms')
    //         .doc(String(roomId))
    //         .collection('messages')
    //         .get()
    //         .then(snapshot => {
    //             let messages = [] as MessageType[];
    //             snapshot.forEach(item => {
    //                 messages.push(item.data() as MessageType)
    //             });
    //             roomDetails.messages = messages;
    //         })

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

    return {
        props: {
            roomDetails
        }
    }
}