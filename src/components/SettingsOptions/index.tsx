import React, { } from 'react';
import { FiLogOut, FiEdit, FiDelete } from 'react-icons/fi';
import { invalidOutlineColor, logoutColor, myColor_200, myColor_300 } from '../../styles/variables';
import {
    Container,
    OptionsContainer,
    Option
} from './styles';

interface Props {
    isOpen: boolean,
    setIsOpen: (newState: boolean) => void;
}

export default function SettingsOptions({ isOpen, setIsOpen }: Props) {
    return (
        <Container tabIndex={-1} isOpen={isOpen}>
            <OptionsContainer>
                <Option>
                    <FiDelete size={14} color={myColor_200} />
                    Fechar sala
                </Option>

                <Option style={{ marginTop: '40px', color: logoutColor }}>
                    <FiLogOut size={14} color={logoutColor} />
                    Sair
                </Option>
            </OptionsContainer>
        </Container>
    )
}