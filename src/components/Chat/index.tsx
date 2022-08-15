import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebase';
import {
    Container,
    Header,
    Content,
} from './styles';
import Image from 'next/image';
import Message from '../Message';
import { format } from 'date-fns';

type Message = {
    user: string,
    message: string,
    id: string,
    avatarURL: string,
    created: string,
    createdFormat: string
}

export default function Chat() {

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            user: 'user1',
            message: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75',
            created: '',
            createdFormat: ''
        },
        {
            id: '2', user: 'user2', message: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself',
            avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75',
            created: '', createdFormat: ''
        },
        {
            id: '3', user: 'user',
            avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75',
            message: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself', created: '', createdFormat: ''
        }
    ]);
    const [message, setMessage] = useState<string>('');
    const [user, setUser] = useState<string>('');

    useEffect(() => {

        (async () => {
            await firebase.firestore().collection('rooms')
                .doc('EkiFWwXV4CtnMJK6havD')
                .collection('messages')
                .orderBy('created')
                .onSnapshot(snapshot => {
                    let list = [] as Message[];
                    snapshot.forEach(e => {
                        list.push({
                            user: e.data().user,
                            message: e.data().message,
                            created: e.data().created,
                            createdFormat: format(e.data().created.toDate(), 'HH:mm:ss'),
                            id: e.id,
                            avatarURL: '',
                        });
                    });
                    setMessages(list);
                })
        })

    }, [])

    const handleEnviarMensagem = async () => {
        await firebase.firestore().collection('rooms')
            .doc('EkiFWwXV4CtnMJK6havD')
            .collection('messages')
            .add({
                created: new Date(),
                user: user,
                message: message,
            })
    }

    return (
        <Container>
            <Content>
                {messages.map(message => <Message data={message} />)}
            </Content>

            <br />

            <input
                value={user}
                onChange={e => setUser(e.target.value)}
                placeholder='user'
                type='text' />

            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='mensagem'
                type='text' />

            <button onClick={handleEnviarMensagem}>
                ENVIAR MENSAGEM
            </button>
        </Container>
    )
}