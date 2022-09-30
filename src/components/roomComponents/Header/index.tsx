import React, { useState } from 'react';

import groupytIcon from '/public/icon.svg';
import Image from 'next/image';

import {
    Container,
    RoomName,
    Logo,
    ButtonsContainer,
    Content,
    Button,
    ButtonText,
    SettingsContainer

} from './styles';
import { useRouter } from 'next/router';
import { myColor_100, myColor_200 } from '../../../styles/variables';
import { FiSettings, FiUserPlus } from 'react-icons/fi';
import InviteFriendsModal from '../InviteFriendsModal';
import SettingsOptions from '../SettingsOptions';

interface HeaderProps {
    roomName: string;
}

const Header = ({ roomName }: HeaderProps) => {
    const [inviteModal, setInviteModal] = useState(false);
    const [settingsIsOpen, setSettingsIsOpen] = useState(false);

    const handleInviteFriends = () => {
        setInviteModal(!inviteModal);
        setSettingsIsOpen(false);
    }

    const handleSettings = () => {
        setSettingsIsOpen(!settingsIsOpen);
        setInviteModal(false);
    }

    const router = useRouter();

    return (
        <Container>
            {inviteModal && <InviteFriendsModal modalIsOpen={setInviteModal} />}

            <Content>
                <RoomName>
                    {roomName}
                </RoomName>

                <Logo onClick={() => router.push('/')}>
                    <Image alt='Groupyt Icon' width={40} height={40} src={groupytIcon} />
                </Logo>

                <ButtonsContainer>

                    <SettingsContainer>
                        <Button onClick={handleSettings} primary={false}>
                            <FiSettings size={18} color={myColor_200} />
                        </Button>
                        <SettingsOptions isOpen={settingsIsOpen} setIsOpen={setSettingsIsOpen} />
                    </SettingsContainer>

                    <Button onClick={handleInviteFriends} primary>
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