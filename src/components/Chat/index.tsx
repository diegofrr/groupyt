import React, { FormEvent, useEffect, useState, useCallback } from 'react';
import firebase from '../../services/firebase';
import { UserType } from '../../contexts/user';
import {
    Container,
    Header,
    Content,
    MessageInput,
    SendMessageContainer,
    SendMessageButton

} from './styles';
import Image from 'next/image';
import Message from '../Message';
import { format } from 'date-fns';
import { BiSend } from 'react-icons/bi';
import { myColor_100} from '../../styles/variables';

export type MessageType = {
    user: UserType,
    message: string,
    id: string,
    created: string,
    createdFormat: string
}

export default function Chat() {

    const [messages, setMessages] = useState<MessageType[]>([
        {
            id: '1', user: {id: '1', admin: false, name: 'Diêgo', avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75'},
            message: 'Nor is there anyone who loves or pursues ',
            created: '', createdFormat: ''
        },

        {
            id: '2', user: {id: '2', admin: false, name: 'João', avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75'},
            message: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself',
            created: '', createdFormat: ''
        },

        {
            id: '3', user: {id: '3', admin: true, name: 'José', avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75'},
            message: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself',
            created: '', createdFormat: ''
        },

        {
            id: '4', user: {id: '4', admin: false, name: 'Maria', avatarURL: 'http://localhost:3000/_next/image?url=%2Fimages%2Favatars%2Fmale%2Favatar10.png&w=64&q=75'},
            message: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself. Nor is there anyone who loves or pursues or desires to obtain pain of itself',
            created: '', createdFormat: ''
        },
        
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
                    let list = [] as MessageType[];
                    snapshot.forEach(e => {
                        list.push({
                            user: e.data().user,
                            message: e.data().message,
                            created: e.data().created,
                            createdFormat: format(e.data().created.toDate(), 'HH:mm:ss'),
                            id: e.id,
                        });
                    });
                    setMessages(list);
                })
        })

    }, [])

    const handleSendMessage = useCallback((e: FormEvent) => {
        e.preventDefault();
        setMessage('');
        alert(message)
    },[message])

    const handleEnviarMensagem = useCallback(async () => {

        if (message !== null && message !== '') {
            await firebase.firestore().collection('rooms')
                .doc('EkiFWwXV4CtnMJK6havD')
                .collection('messages')
                .add({
                    created: new Date(),
                    user: user,
                    message: message,
                })
        } else {
            alert('vazio')
        }
    },[message])

    return (
        <Container>
            <Header>
                <span>Chat</span>
            </Header>
            <Content>
                {messages.map(message => <Message key={message.id} data={message} />)}
            </Content>

            <br />

            <SendMessageContainer onSubmit={e => handleSendMessage(e)}>
                <MessageInput
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder='Mensagem...'
                    type='text' />

                <SendMessageButton>
                    <BiSend size={18} color={myColor_100} />
                </SendMessageButton>
            </SendMessageContainer>

        </Container>
    )
}