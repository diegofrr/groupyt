import React, { useContext, useState } from 'react';
import Image from 'next/image';

import { UserContext } from '../../../contexts/user';
import { MessageType } from '../../../utils/types';
import {
    Container,
    Avatar,
    Username,
    UsernameAndMessage,
    MessageContainer,
    MessageText
} from './styles';

interface MessageProps {
    data: MessageType,
    latestItem: MessageType,
}

export default function Message({ data, latestItem }: MessageProps) {

    const { user } = useContext(UserContext)
    const [isOwner, setIsOwner] = useState<boolean>(user.id === data?.user.id)
    const [diferentUser, setDiferentUser] = useState(latestItem?.user?.id !== data.user.id);

    return (
        <Container diferentUser={diferentUser} isOwner={isOwner} isAdmin={data?.user.admin}>
            {diferentUser && (
                <Avatar>
                    <Image
                        style={{ borderRadius: '50%' }}
                        width={60} height={60}
                        alt='User avatar'
                        src={data?.user.avatarURL} />
                </Avatar>
            )}
            <UsernameAndMessage>
                {diferentUser && (
                    <Username diferentUser isOwner={isOwner} isAdmin={data?.user.admin}>
                        {isOwner ? 'Você' : data?.user.name}
                    </Username>
                )}
                <MessageContainer isAdmin={data?.user.admin} isOwner={isOwner} diferentUser={diferentUser}>
                    <MessageText>
                        {data?.message}
                    </MessageText>
                </MessageContainer>
            </UsernameAndMessage>
        </Container>
    )
}