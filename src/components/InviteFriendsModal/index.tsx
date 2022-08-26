import React, { useContext } from 'react';
import { Button } from '../Header/styles';
import {
    Background,
    CloseButton,
    Container,
    Content,
    RoomUrl,
    RoomUrlContainer
} from './styles';
import { FiCopy, FiX } from 'react-icons/fi';
import { myColor_100, myColor_300 } from '../../styles/variables';
import { RoomDetailsContext } from '../../contexts/roomDetails';
import { useRouter } from 'next/router';

interface ModalProps {
    modalIsOpen: (state: boolean) => void
}

export default function InviteFriendsModal({ modalIsOpen }: ModalProps) {
    const router = useRouter();

    return (
        <Container>
            <Background />
            <Content>
                <CloseButton onClick={() => modalIsOpen(false)}>
                    <FiX size={16} color={myColor_300} />
                </CloseButton>
                <RoomUrlContainer>
                    <RoomUrl>
                        {`localhost:3000${router.pathname}`}
                    </RoomUrl>
                    <Button primary>
                        <FiCopy size={18} color={myColor_100} />
                    </Button>
                </RoomUrlContainer>
            </Content>
            <Background onClick={() => modalIsOpen(false)} />
        </Container>
    )
}