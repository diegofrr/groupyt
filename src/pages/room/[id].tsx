import React, { useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import firebase from '../../services/firebase';
import { UserContext } from '../../context/user';
import Header from '../../components/Header';
import Head from 'next/head';
import {
    Container
} from './styles';

import VideoiFrame from '../../components/VideoiFrame';

const Room: NextPage = () => {
    const { user, setUser } = useContext(UserContext);

    const { query } = useRouter();
    const [roomDetails, setRoomDetails] = useState({
        name: 'Sala de Diêgo',
        users: [{ name: 'Diêgo', avatar: '' }, { name: 'João', avatar: '' }]
    });

    const [messages, setMessages] = useState([
        {}
    ])

    console.log(query.id);

    return (
        <>
            <Head>
                <title>{roomDetails.name}</title>
            </Head>
            <Header roomName={roomDetails.name} />
            <Container>
                {user.name}
                <VideoiFrame videoID='bzvNb8eIvMQ' />
            </Container>
        </>

    )
}

export default Room;