import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebase';
import { Container } from './styles';
import { format } from 'date-fns';

type Message = {
    user: string,
    message: string,
    id: string,
    created: string,
    createdFormat: string
}

export default function Chat() {

    const [messages, setMessages] = useState<Message[]>([]);
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
                            id: e.id
                        });
                    });
                    setMessages(list);
                })
        })();

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
        <div>
            COMPONENTE DO CHAT
            <br />

            <ul>
                {messages.map(message => <li style={{color: 'white'}} key={message.id}>
                    {`${message.user} - ${message.message} - ${message.createdFormat}`}
                </li>)}
            </ul>

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
        </div>
    )
}