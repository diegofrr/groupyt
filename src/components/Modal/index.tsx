import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalTitle,
    ModalTitleInput,
    OnlineMembers,
    ModalLabel,
    Input,
    AvatarGenreContainer,
    AvatarsContainer,
    EditButton,
    SaveButton,
    Form,
    ErrorMessage,
    ModalTitleContainer,
    NameContainer,
    LetterCounter,
    AvatarsContent,
    AvatarsHeader,
    GenreOption,
    Avatar,
    ButtonsContainer,
    AvatarsCredits,

} from './styles';

import { Button, ButtonText } from '../../styles/home';
import { TbEdit } from 'react-icons/tb';
import { GoCheck } from 'react-icons/go';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'
import { myColor_100 } from '../../styles/variables';
import { maleAvatars, femaleAvatars } from '../AvatarsList';
import { ModalContext } from '../../context/modal';


const Modal: React.FC = () => {

    const { setModalIsOpen } = useContext(ModalContext);

    const [roomTitle, setRoomTitle] = useState<string>('Minha sala');
    const [titleInput, setTitleInput] = useState<string>(roomTitle);
    const [editing, setEditing] = useState<boolean>(false);
    const [titleValid, setTitleValid] = useState({ valid: true, msg: '' });

    const [username, setUsername] = useState<string>('');
    const [genre, setGenre] = useState<string>('female');
    const [avatar, setAvatar] = useState<string>('');

    useEffect(() => {

        if (titleInput.trim() === '') setTitleValid({ valid: false, msg: 'Forneça um nome para a sala' })
        else if (titleInput.trim().length < 5) setTitleValid({ valid: false, msg: 'O nome da sala precisa ter, pelo menos, 5 caracteres.' });
        // else if (!isNaN(Number(titleInput[0]))) setTitleValid({ valid: false, msg: 'O nome da sala não pode começar com um número' })
        else setTitleValid({ valid: true, msg: '' })

    }, [titleInput]);

    useEffect(() => {
        setAvatar(`/images/avatars/${genre}/avatar1.png`)
    }, [genre]);

    const handleSelectedAvatar = (avatar: string) => {
        setAvatar(avatar);
    }

    const handleEditTitle = () => {
        setEditing(!editing)
    }

    const handleSaveTitle = () => {

        if (titleValid.valid) {
            setRoomTitle(titleInput);
            setEditing(false);
        }
    }

    const handleCancel = () => {
        setModalIsOpen(false)
    }

    return (
        <ModalContainer>
            <ModalContent>

                <ModalHeader>
                    {!titleValid.valid && <ErrorMessage>{titleValid.msg}</ErrorMessage>}
                    <ModalTitleContainer>
                        <ModalTitle editing={editing}>
                            {roomTitle}
                        </ModalTitle>
                        {editing &&
                            <Form onSubmit={handleSaveTitle}>
                                <ModalTitleInput maxLength={20} valid={titleValid.valid} value={titleInput} onChange={e => setTitleInput(e.target.value)} />
                            </Form>}
                    </ModalTitleContainer>
                    {!editing
                        ? <EditButton onClick={handleEditTitle}>
                            <TbEdit size={20} color={myColor_100} />
                        </EditButton>
                        : <SaveButton onClick={handleSaveTitle}>
                            <GoCheck size={20} color={myColor_100} />
                        </SaveButton>}

                </ModalHeader>

                <NameContainer>
                    <ModalLabel>
                        Seu apelido
                    </ModalLabel>
                    <Input
                        type='text'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder='Seu apelido...'
                        maxLength={15}
                    />
                    <LetterCounter letters={username.length}>{username.length}/15</LetterCounter>
                </NameContainer>

                <AvatarsContainer>

                    <AvatarsHeader>
                        <ModalLabel>
                            Escolha um avatar
                        </ModalLabel>
                        <AvatarGenreContainer>
                            <GenreOption
                                selected={genre === 'female'}
                                genre='female'
                                onClick={() => setGenre('female')}>
                                <BiFemaleSign size={18} />
                            </GenreOption>

                            <GenreOption
                                selected={genre === 'male'}
                                genre='male'
                                onClick={() => setGenre('male')}>
                                <BiMaleSign size={18} />
                            </GenreOption>
                        </AvatarGenreContainer>
                    </AvatarsHeader>

                    <AvatarsContent>
                        {genre === 'male' ?
                            (
                                maleAvatars.map(item => <Avatar selected={item === avatar} key={item} onClick={() => handleSelectedAvatar(item)}><Image
                                    style={{ borderRadius: '50%' }}
                                    width={60} height={60}
                                    src={item} /></Avatar>)
                            )
                            : (
                                femaleAvatars.map(item => <Avatar selected={item === avatar} key={item} onClick={() => handleSelectedAvatar(item)}><Image
                                    style={{ borderRadius: '50%' }}
                                    width={60} height={60}
                                    src={item} /></Avatar>)
                            )}

                        <AvatarsCredits>
                            Designed by Kubanek
                        </AvatarsCredits>

                    </AvatarsContent>

                </AvatarsContainer>

                <ButtonsContainer>
                    <Button onClick={() => { }} primary>
                        <ButtonText primary>
                            Criar sala
                        </ButtonText>
                    </Button>

                    <Button onClick={handleCancel} primary={false}>
                        <ButtonText primary={false}>
                            Cancelar
                        </ButtonText>
                    </Button>
                </ButtonsContainer>

            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;