import React, { useContext } from 'react';
import { Container } from "./styles";
import ReactLoading from 'react-loading';
import { purpleColor } from "../../styles/variables";
import { ModalContext } from '../../contexts/modal';

export default function Loading() {
    const { modalType } = useContext(ModalContext)
    
    return (
        <Container>
            <span>
                {modalType === 'ENTER_TO_ROOM'
                ? 'Entrando...'
                : 'Criando...'}
            </span>
            <ReactLoading
                type='bubbles'
                color={purpleColor}
                width={60}
                height={60} />
        </Container>
    )
}