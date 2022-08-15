import React, { } from 'react';
import Image from 'next/image';
import {
    Container,
    Avatar,
    Username,
    UsernameAndMessage,
    MessageContainer,
    MessageText
} from './styles';

interface MessageProps {
    data: Message
}

type Message = {
    user: string,
    message: string,
    id: string,
    avatarURL: string,
    created: string,
    createdFormat: string
}

export default function Message({ data }: MessageProps) {
    return (
        <Container>
            <Avatar>
                <Image
                    style={{ borderRadius: '50%' }}
                    width={60} height={60}
                    src={data?.avatarURL} />
            </Avatar>
            <UsernameAndMessage>
                <Username>
                    {data?.user}
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