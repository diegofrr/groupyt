import React, { useContext, useEffect, useState } from 'react';
import { FiLogOut, FiEdit, FiDelete } from 'react-icons/fi';
import { RoomDetailsContext } from '../../contexts/roomDetails';
import firebase from '../../services/firebase';
import { UserContext } from '../../contexts/user';
import { invalidOutlineColor, logoutColor, myColor_200, myColor_300 } from '../../styles/variables';
import {
    Container,
    OptionsContainer,
    Option
} from './styles';
import { useRouter } from 'next/router';

interface Props {
    isOpen: boolean,
    setIsOpen: (newState: boolean) => void;
}

export default function SettingsOptions({ isOpen, setIsOpen }: Props) {
    const { user } = useContext(UserContext);
    const router = useRouter();

    const { users, roomId, setRoomId } = useContext(RoomDetailsContext);
    const [roomAdmin, setRoomAdmin] = useState(users.filter(u => u.admin === true)[0].id === user.id);

    const removeRoom = async () => {
        await firebase.firestore().collection('rooms')
            .doc(roomId)
            .delete()
            .then(() => {
                router.push('/')
            })
    }

    return (
        <Container tabIndex={-1} isOpen={isOpen}>
            <OptionsContainer>
                {roomAdmin && (
                    <Option style={{ marginBottom: '40px' }} onClick={removeRoom}>
                        <FiDelete size={14} color={myColor_200} />
                        Fechar sala
                    </Option>
                )}

                <Option style={{ color: logoutColor }}>
                    <FiLogOut size={14} color={logoutColor} />
                    Sair
                </Option>
            </OptionsContainer>
        </Container>
    )
}