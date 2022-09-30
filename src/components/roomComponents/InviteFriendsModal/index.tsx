import React, { useState, useRef, useEffect } from 'react';
import { Button, ButtonText } from '../../../styles/home';
import {
    Background,
    CloseButton,
    Container,
    Content,
    RoomUrl,
    RoomUrlContainer,
    InviteMessage
} from './styles';
import { FiCheck, FiCopy, FiX } from 'react-icons/fi';
import { myColor_100, myColor_300 } from '../../../styles/variables';
import { useRouter } from 'next/router';

interface ModalProps {
    modalIsOpen: (state: boolean) => void
}

export default function InviteFriendsModal({ modalIsOpen }: ModalProps) {
    const router = useRouter();
    const urlRef = useRef<HTMLElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setCopied(false);
    }, [])

    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(urlRef.current?.innerHTML || '');
    }

    return (
        <Container>
            <Background />
            <Content>
                <InviteMessage>
                    Copie o link abaixo, <br/> envie para seus amigos <br/> e faça a festa! 😜
                </InviteMessage>
                <CloseButton onClick={() => modalIsOpen(false)}>
                    <FiX size={16} color={myColor_300} />
                </CloseButton>
                <RoomUrlContainer>
                    <RoomUrl ref={urlRef}>
                        {`https://groupyt.vercel.app${router.asPath}`}
                    </RoomUrl>
                    {!copied ? (
                        <Button onClick={handleCopy} style={{ maxHeight: '40px' }} primary>
                            <FiCopy size={18} color={myColor_100} />
                            <ButtonText primary>Copiar</ButtonText>
                        </Button>
                    ) : (
                        <Button style={{ maxHeight: '40px', backgroundColor: '#41862c' }} primary>
                            <FiCheck size={18} color={myColor_100} />
                            <ButtonText primary>Copiado</ButtonText>
                        </Button>
                    )}
                </RoomUrlContainer>
            </Content>
            <Background onClick={() => modalIsOpen(false)} />
        </Container>
    )
}