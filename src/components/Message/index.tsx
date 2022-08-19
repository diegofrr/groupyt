import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { MessageType } from '../Chat';
import {
    Container,
    Avatar,
    Username,
    UsernameAndMessage,
    MessageContainer,
    MessageText
} from './styles';
import { UserContext } from '../../contexts/user';

interface MessageProps {
    data: MessageType
}

export default function Message({ data }: MessageProps) {

    const { user } = useContext(UserContext);
    const [isOwner, setIsOwner] = useState<boolean>(user.id === data?.user.id)

    return (
        <Container isOwner={isOwner}>
            <Avatar>
                <Image
                    style={{ borderRadius: '50%' }}
                    width={60} height={60}
                    src={data?.user.avatarURL} />
            </Avatar>
            <UsernameAndMessage>
                <Username isOwner={isOwner}>
                    {data?.user.name}
                </Username>
                <MessageContainer>
                    <MessageText>
                        {data?.message}
                    </MessageText>
                </MessageContainer>
            </UsernameAndMessage>
        </Container>
    )
}