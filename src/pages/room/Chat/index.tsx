import React, { useContext, useRef, FormEvent, useEffect, useState, useCallback } from 'react';
import firebase from '../../../services/firebase';

import Message from './Message';

import { UserContext } from '../../../contexts/user';
import { RoomDetailsContext } from '../../../contexts/roomDetails';

import {
    Container,
    Header,
    Content,
    MessageInput,
    SendMessageContainer,
    SendMessageButton

} from './styles';
import { MessageType } from '../../../utils/types';
import { format } from 'date-fns';
import { BiSend } from 'react-icons/bi';
import { myColor_100 } from '../../../styles/variables';

export default function Chat() {
    const { roomId } = useContext(RoomDetailsContext);
    const { user } = useContext(UserContext);

    const [messages, setMessages] = useState<MessageType[]>([]);
    const [message, setMessage] = useState<string>('');
    const myRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        myRef.current?.scrollTo(0, myRef.current?.scrollHeight)
    }, [myRef, messages])

    useEffect(() => {

        (async () => {
            await firebase.firestore().collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('messagePos', 'asc')
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
                });
        })();

    }, [roomId])

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault();
        setMessage('');
    }

    const handleEnviarMensagem = useCallback(async () => {
        if (message !== null && message !== '') {
            await firebase.firestore().collection('rooms')
                .doc(roomId)
                .collection('messages')
                .add({
                    created: new Date(),
                    user: user,
                    message: message,
                    messagePos: messages.length + 1
                })

        } else {

        }
    }, [message, roomId, user, messages])

    return (
        <Container>
            <Header>
                <span>Chat</span>
            </Header>
            <Content ref={myRef}>
                {messages.map((message, index) => <>
                    <Message latestItem={index > 0 ? messages[index - 1] : {} as MessageType} key={message.id} data={message} />
                </>)}
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