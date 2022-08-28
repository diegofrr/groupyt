import React, { useContext, useState } from 'react';
import { FiLogOut, FiDelete } from 'react-icons/fi';
import { RoomDetailsContext } from '../../contexts/roomDetails';
import firebase from '../../services/firebase';
import { UserContext } from '../../contexts/user';
import { logoutColor, myColor_200 } from '../../styles/variables';
import {
    Container,
    OptionsContainer,
    Option
} from './styles';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

interface Props {
    isOpen: boolean,
    setIsOpen: (newState: boolean) => void;
}

export default function SettingsOptions({ isOpen, setIsOpen }: Props) {
    const { user } = useContext(UserContext);
    const router = useRouter();

    const { users, roomId } = useContext(RoomDetailsContext);
    const [roomAdmin] = useState(users.filter(u => u.admin === true)[0]?.id === user.id);

    const removeRoom = async () => {
        // await firebase.firestore().collection('rooms')
        //     .doc(roomId)
        //     .delete()
        //     .then(() => {
        //         router.push('/')
        //     })
        toast('Em breve...', {icon: '🚧'})
        setIsOpen(false);
    }

    const handleExit = async () => {
        toast('Em breve...', {icon: '🚧'})
        setIsOpen(false);
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

                <Option style={{ color: logoutColor }} onClick={handleExit} >
                    <FiLogOut size={14} color={logoutColor} />
                    Sair
                </Option>
            </OptionsContainer>
        </Container>
    )
}