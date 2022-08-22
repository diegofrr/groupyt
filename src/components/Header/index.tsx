import React, { } from 'react';
import {
    Container,
    RoomName,
    Logo,
    ButtonsContainer,
    Content,
    Button,
    ButtonText

} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import groupytIcon from '../../../public/icon.svg';
import Image from 'next/image';
import { myColor_100, myColor_200 } from '../../styles/variables';
import { FiSettings, FiUserPlus } from 'react-icons/fi';

interface HeaderProps {
    roomName: string;
}


const Header = ({ roomName }: HeaderProps) => {
    const router = useRouter();

    return (
        <Container>
            <Content>
                <RoomName>
                    {roomName}
                </RoomName>

                <Logo>
                    <Image alt='Groupyt Icon' width={40} height={40} src={groupytIcon} />
                </Logo>

                <ButtonsContainer>

                    <Button onClick={() => alert('clicou')} primary={false}>
                        <FiSettings size={18} color={myColor_200} />
                    </Button>

                    <Button onClick={() => alert('clicou')} primary>
                        <FiUserPlus style={{ display: 'none' }} size={18} color={myColor_100} />
                        <ButtonText primary>
                            Convidar amigos
                        </ButtonText>
                    </Button>

                </ButtonsContainer>
            </Content>
        </Container>
    )
}

export default Header;