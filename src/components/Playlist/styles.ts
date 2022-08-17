import styled, {css} from "styled-components";
import { blockColor, blockHeaderColor, myColor_200, myColor_300 } from "../../styles/variables";

interface FormProps {
    activeInput: boolean
}

export const Container = styled.div`
    background-color: ${blockColor};
    border-radius: 10px;
    height: 100px;
    padding: 10px;
    min-width: 200px;

    @media screen and (max-width: 800px) {
        height: 520px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const PlaylistHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 10px;
    }

    & span {
        color: ${myColor_200};
        font-weight: bold;
    }
`

export const AddNewVideo = styled.form<FormProps>`
    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: row-reverse;
    gap: 10px;
    width: 100%;
    position: relative;

    & input {
        height: 40px;
        border: none;
        outline: none;
        border-radius: 10px;
        transition: all .3s ease;
        width: min-content;
        width: 100%;
        max-width: 0;
        transition: all .3s ease;
        font-size: .8rem;
        background-color: ${blockHeaderColor};
        color: ${myColor_200};

        ${p => p.activeInput && css`
            max-width: 400px;
            padding: 0 10px;
        `}

        &::placeholder {
            color: ${myColor_300};
            font-style: italic;
        }
    }
    
`

export const CancelButton = styled.button`
    display: grid;
    place-items: center;
    position: absolute;
    right: 60px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    transition: all .3s ease;

    &:hover {
        filter: brightness(1.1);
    }
`