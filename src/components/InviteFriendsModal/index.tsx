import React, { useContext } from 'react';
import { Button, ButtonText } from '../../styles/home';
import {
    Background,
    CloseButton,
    Container,
    Content,
    RoomUrl,
    RoomUrlContainer,
    InviteMessage
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
                <InviteMessage>
                    Copie o link abaixo e envie para seus amigos.
                </InviteMessage>
                <CloseButton onClick={() => modalIsOpen(false)}>
                    <FiX size={16} color={myColor_300} />
                </CloseButton>
                <RoomUrlContainer>
                    <RoomUrl>
                        {`localhost:3000${router.asPath}`}
                    </RoomUrl>
                    <Button style={{maxHeight: '40px'}} primary>
                        <FiCopy size={18} color={myColor_100} />
                        <ButtonText primary>Copiar</ButtonText>
                    </Button>
                </RoomUrlContainer>
            </Content>
            <Background onClick={() => modalIsOpen(false)} />
        </Container>
    )
}