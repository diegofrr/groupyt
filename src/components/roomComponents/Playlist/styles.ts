import styled, { css } from "styled-components";
import {
    blockColor,
    blockHeaderColor,
    myColor_200,
    myColor_300,
} from "../../../styles/variables";

interface FormProps {
    activeInput: boolean
}

interface PlaylistProps {
    margin: number
}

export const Container = styled.div`
    background-color: ${blockColor};
    border-radius: 2vh;
    padding: 10px;
    min-width: 200px;
    position: relative;
    min-height: 80px;

    @media screen and (max-width: 800px) and (min-width: 601px) {
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }

`

export const PlaylistHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    position: absolute;
    z-index: 1000;
    
    @media screen and (max-width: 800px) and (min-width: 501px) {
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

    button {
        box-shadow: 0 0 20px -10px rgba(0,0,0,.5);
    }

    input {
        height: 40px;
        border: none;
        outline: none;
        border-radius: 10px;
        transition: all .3s ease;
        width: 100%;
        max-width: 0;
        min-width: 0;
        transition: all .3s ease;
        font-size: .8rem;
        background-color: ${blockHeaderColor};
        color: ${myColor_200};
        
        box-shadow: 0 0 20px -5px rgba(0,0,0,.5);

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
    box-shadow: none !important;

    &:hover {
        filter: brightness(1.1);
    }
`

export const VideosContainer = styled.div`
    position: absolute;
    top: 10px;
    overflow-x: hidden;
    height: calc(100% - 20px);
    overflow-y: hidden;
    width: calc(100% - 20px);
    touch-action: manipulation;

    @media screen and (max-width: 800px)  and (min-width: 601px) {
        overflow-y: scroll;
        height: 450px;
        z-index: 1000;
        margin-top: 50px;

        scrollbar-width: none;
    
        &::-webkit-scrollbar {
        width: 0;
        }
    }

`

export const VideosContent = styled.div<PlaylistProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 100%;
    transition: all .3s ease;
    margin-left: ${p => `${p.margin}px`};

    @media screen and (max-width: 800px) and (min-width: 601px) {
        flex-direction: column;
    }
`

export const ActionButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 800px) and (min-width: 501px) {
        display: none;
    }

`

export const ActionButton = styled.button`
    background-color: #FFF;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
`

export const EmptyPlaylist = styled.span`
    display: grid;
    place-items: center;
    color: ${myColor_300};
    font-size: .8rem;
    height: 100%;
`