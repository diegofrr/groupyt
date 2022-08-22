import styled, { css } from "styled-components";
import {
    bgColor,
    blockColor,
    blockHeaderColor,
    invalidBgColor,
    invalidOutlineColor,
    myColor_100,
    myColor_200,
    myColor_300,
    purpleColor,
    validBgColor,

} from "../../styles/variables";

interface TitleInputProps {
    valid: boolean;
}

interface TitleProps {
    editing: boolean;
}

interface LetterCounter {
    letters: number;
}

interface GenreProps {
    selected: boolean;
    genre: string;
}

interface AvatarProps {
    selected: boolean;
}

interface InputUsernameProps {
    valid: boolean;
}

interface ModalProps {
    isOpen: boolean;
}

export const ModalContainer = styled.div<ModalProps>`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    overflow-x: hidden;
    transition: all .3s ease;
    ${p => p.isOpen && css`
        animation: openModal 0.2s ease-in-out;
    `}

    @keyframes openModal {
        0%{transform: scale(0);}
        100% {transform: scale(1);}
    }

    &>* {
        z-index: 10;
    }
`

export const ModalContent = styled.div`
    background-color: ${blockColor};
    width: calc(100% - 40px);
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px -10px rgba(0,0,0,.2);
    position: relative;
    padding-top: 100px;

    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: ${blockHeaderColor};
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
`

export const ModalTitleContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

export const ModalTitle = styled.h2<TitleProps>`
    color: ${myColor_100};
    font-weight: bold;
    font-size: 1.7rem;
    padding: 0 10px;
    display: flex;
    height: 40px;
    align-items: center;
    word-break: break-all;
    display: ${p => p.editing ? 'none' : 'flex'};

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`

export const Form = styled.form`
    position: absolute;
    left: 0;
    height: 40px;
    width: 100%;
`

export const ModalTitleInput = styled.input<TitleInputProps>`
    width: 100%;
    border-radius: 10px;
    border: none;
    outline: 2px solid transparent;
    padding: 0 10px;
    font-size: 1.7rem;
    font-weight: bold;
    color: ${myColor_100};
    height: 40px;
    transition: all .3s ease;
    background-color: ${p => p.valid ? validBgColor : invalidBgColor};

    &:focus {
        outline-color: ${p => p.valid ? purpleColor : invalidOutlineColor};
    }

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`

export const EditButton = styled.button`
    background-color: ${purpleColor};
    display: grid;
    place-items: center;
    border-radius: 10px;
    min-width: 40px;
    min-height: 40px;
    transition: all .3s ease;

    &:hover {
        filter: brightness(1.1)
    }
`

export const SaveButton = styled.button`
    background-color: ${purpleColor};
    display: grid;
    place-items: center;
    border-radius: 10px;
    min-width: 40px;
    min-height: 40px;
    transition: all .3s ease;

    &:hover {
        filter: brightness(1.1)
    }
`

export const ErrorMessage = styled.span`
    position: absolute;
    left: 20px;
    bottom: 85px;
    color: #b62d2d;
    font-size: .9rem;
    font-weight: bold;
    display: flex;
    transition: all .3s ease;
`

export const OnlineMembers = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${myColor_200};
    flex-direction: row;
    font-size: .8rem;
    font-weight: bold;
`

export const NameContainer = styled.div`
    position: relative;
`

export const LetterCounter = styled.span<LetterCounter>`
    position: absolute;
    right: 0;
    bottom: 60px;
    color: ${p => p.letters === 15 ? '#9c4747' : myColor_300};
    font-size: .7rem;
    font-weight: bold;
`

export const ModalLabel = styled.label`
    font-weight: bold;
    color: ${myColor_100};
    font-size: .9rem;
`

export const UsernameInput = styled.input<InputUsernameProps>`
    display: block;
    width: 100%;
    height: 50px;
    outline: 2px solid transparent;
    transition: all .3s ease;
    border-radius: 10px;
    border: none;
    padding: 0 10px;
    background-color: ${p => p.valid ? blockHeaderColor : invalidBgColor};
    margin-top: 10px;
    color: ${myColor_100};
    outline-color: ${p => !p.valid && invalidOutlineColor};

    &::placeholder {
        font-style: italic;
        font-size: .9rem;
        color: ${myColor_300};
    }

    &:focus {
        outline-color: ${purpleColor};
    }
`

export const AvatarsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AvatarsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const AvatarGenreContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`

export const GenreOption = styled.span<GenreProps>`
    cursor: pointer;
    font-size: .8rem;
    transition: all .3s ease;
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border-radius: 20px;
    color: ${p => p.genre === 'male' ? '#3a94cf' : '#c575dd'};
    outline: 1px solid transparent;
    outline-color: ${p => p.selected && (p.genre === 'male' ? '#3a94cf' : '#c575dd')};


    &:hover {
        filter: brightness(1.1);
    }
`

export const AvatarsContent = styled.div`
    border: 1px solid ${blockHeaderColor};
    border-radius: 10px;
    padding: 20px 20px;
    position: relative;
`

export const AvatarsScroll = styled.div`
    display: grid;
    padding: 10px 0;
    grid-template-columns: repeat(6, minmax(20px, 60px));
    grid-auto-rows: auto;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(4, minmax(20px, 60px));
    }
`

export const Avatar = styled.div<AvatarProps>`
    display: grid;
    place-items: center;
    border-radius: 50%;
    overflow: hidden;
    opacity: ${p => p.selected ? 1 : .5};
    filter: grayscale(${p => p.selected ? 0 : .5});
    outline: 3px solid ${p => p.selected ? purpleColor : 'transparent'};
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        opacity: 1;
        filter: grayscale(0)
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20%;
    flex-direction: row-reverse;
    justify-content: space-between;
`

export const AvatarsCredits = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${blockColor};
    border-radius: 20px;
    border: 1px solid ${blockHeaderColor};
    padding: 4px 10px;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    position: absolute;
    color: ${myColor_300};
    font-size: .6rem;
    user-select: none;
    cursor: default;
    text-align: center;
`