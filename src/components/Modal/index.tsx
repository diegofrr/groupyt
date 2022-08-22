import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ReactLoading from 'react-loading';
import {
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalTitle,
    ModalTitleInput,
    OnlineMembers,
    ModalLabel,
    UsernameInput,
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
    AvatarsScroll,

} from './styles';

import { Button, ButtonText } from '../../styles/home';
import { FiEdit, FiCheck, FiUser } from 'react-icons/fi';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'
import { myColor_100, myColor_200, purpleColor } from '../../styles/variables';
import { maleAvatars, femaleAvatars } from '../AvatarsList';
import { ModalContext } from '../../contexts/modal';
import { useRouter } from 'next/router';
import Loading from '../Loading';


const Modal: React.FC = () => {
    const router = useRouter();

    const { modalIsOpen, setModalIsOpen, modalType } = useContext(ModalContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [roomTitle, setRoomTitle] = useState<string>('Minha sala');
    const [titleInput, setTitleInput] = useState<string>(roomTitle);
    const [editing, setEditing] = useState<boolean>(false);
    const [titleValid, setTitleValid] = useState({ valid: true, msg: '' });
    const [username, setUsername] = useState<string>('');
    const [genre, setGenre] = useState<string>('female');
    const [avatar, setAvatar] = useState<string>('');
    const [validUsername, setValidUsername] = useState<boolean>(true);

    useEffect(() => {

        if (titleInput.trim() === '') setTitleValid({ valid: false, msg: 'Forneça um nome para a sala' })
        else if (titleInput.trim().length < 5) setTitleValid({ valid: false, msg: 'O nome da sala precisa ter, pelo menos, 5 caracteres.' });
        // else if (!isNaN(Number(titleInput[0]))) setTitleValid({ valid: false, msg: 'O nome da sala não pode começar com um número' })
        else setTitleValid({ valid: true, msg: '' })

    }, [titleInput]);

    useEffect(() => {
        setAvatar(`/images/avatars/${genre}/avatar1.png`)
    }, [genre]);

    useEffect(() => {
        setLoading(false);
    }, [])

    useEffect(() => { if (username.length > 0) checkUsername() }, [username]);

    const checkUsername = () => {
        setValidUsername(
            username !== '' &&
            username !== null &&
            username.length > 2);
    }

    const handleApply = () => {
        checkUsername();
        if (validUsername) {
            setLoading(true);
            if (modalType === 'CREATE_NEW_ROOM') {
                console.log('Criando a sala')
                console.log(username, genre);
                console.log(avatar);
                router.push('/room/testando');
            } else if (modalType === 'ENTER_TO_ROOM') {
                console.log('entrando na sala');
                console.log(username, genre);
                console.log(avatar)
                router.push('/room/testando')
            }
        }
    }

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
        <ModalContainer isOpen={modalIsOpen}>
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
                    {modalType === 'CREATE_NEW_ROOM' ? (
                        !editing
                            ? <EditButton onClick={handleEditTitle}>
                                <FiEdit size={20} color={myColor_100} />
                            </EditButton>
                            : <SaveButton onClick={handleSaveTitle}>
                                <FiCheck size={20} color={myColor_100} />
                            </SaveButton>
                    ) : (
                        <OnlineMembers>
                            <FiUser size={18} color={myColor_200} />
                            4
                        </OnlineMembers>
                    )
                    }

                </ModalHeader>

                {loading
                    ? <Loading />
                    : <>
                        <NameContainer>
                            <ModalLabel>Seu apelido</ModalLabel>
                            <UsernameInput
                                valid={validUsername}
                                type='text'
                                value={username}
                                onChange={e => { setUsername(e.target.value) }}
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
                                <AvatarsScroll>
                                    {genre === 'male' ?
                                        (
                                            maleAvatars.map(item => <Avatar selected={item === avatar} key={item} onClick={() => handleSelectedAvatar(item)}>
                                                <Image
                                                    style={{ borderRadius: '50%' }}
                                                    width={60} height={60}
                                                    src={item} />
                                            </Avatar>)
                                        )
                                        : (
                                            femaleAvatars.map(item => <Avatar selected={item === avatar} key={item} onClick={() => handleSelectedAvatar(item)}>
                                                <Image
                                                    style={{ borderRadius: '50%' }}
                                                    width={60} height={60}
                                                    src={item} />
                                            </Avatar>)
                                        )}
                                </AvatarsScroll>
                                <AvatarsCredits>
                                    Designed by Kubanek
                                </AvatarsCredits>
                            </AvatarsContent>
                        </AvatarsContainer>

                        <ButtonsContainer>
                            <Button onClick={handleApply} primary>
                                <ButtonText primary>
                                    {modalType === 'CREATE_NEW_ROOM' ? 'Criar sala' : 'Entrar na sala'}
                                </ButtonText>
                            </Button>

                            <Button onClick={handleCancel} primary={false}>
                                <ButtonText primary={false}>Cancelar</ButtonText>
                            </Button>
                        </ButtonsContainer>
                    </>}

            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;