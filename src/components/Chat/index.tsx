import React, { useContext, useRef, FormEvent, useEffect, useState, useCallback } from 'react';
import firebase from '../../services/firebase';
import { UserContext, UserType } from '../../contexts/user';
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
import { myColor_100 } from '../../styles/variables';
import { useRouter } from 'next/router';
import { RoomDetailsContext } from '../../contexts/roomDetails';

export type MessageType = {
    user: UserType,
    message: string,
    id: string,
    created: string,
    createdFormat: string
}

export default function Chat() {
    const { query } = useRouter();
    const { roomId } = useContext(RoomDetailsContext);
    const { user } = useContext(UserContext);

    const [messages, setMessages] = useState<MessageType[]>([]);
    const [message, setMessage] = useState<string>('');
    const myRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {

        (async () => {
            await firebase.firestore().collection('rooms')
                .doc(roomId)
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
        })();

    }, [])

    const handleSendMessage = useCallback((e: FormEvent) => {
        e.preventDefault();
        setMessage('');
    }, [message])

    const handleEnviarMensagem = useCallback(async () => {
        if (message !== null && message !== '') {
            await firebase.firestore().collection('rooms')
                .doc(roomId)
                .collection('messages')
                .add({
                    created: new Date(),
                    user: user,
                    message: message,
                })
            myRef.current?.scrollTo(0, myRef.current?.scrollHeight)

        } else {

        }
    }, [message, roomId, user])

    return (
        <Container>
            <Header>
                <span>Chat</span>
            </Header>
            <Content ref={myRef}>
                {messages.map(message => <Message key={message.id} data={message} />)}
            </Content>

            <SendMessageContainer onSubmit={e => handleSendMessage(e)}>
                <MessageInput
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder='Mensagem...'
                    type='text' />

                <SendMessageButton onClick={handleEnviarMensagem}>
                    <BiSend size={18} color={myColor_100} />
                </SendMessageButton>
            </SendMessageContainer>

        </Container>
    )
}