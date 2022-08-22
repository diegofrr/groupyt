import styled, { css } from "styled-components";
import { blockColor, blockHeaderColor, myColor_200, myColor_300, purpleColor } from "../../styles/variables";

interface FormProps {
    activeInput: boolean
}

interface PlaylistProps {
    margin: number
}

export const Container = styled.div`
    background-color: ${blockColor};
    border-radius: 10px;
    padding: 10px;
    min-width: 200px;
    position: relative;
    height: 100px;

    @media screen and (max-width: 800px) and (min-width: 501px) {
        height: 520px;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 150px;
    }

`

export const PlaylistHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    right: 10px;
    gap: 10px;
    position: absolute;
    z-index: 1000;
    
    @media screen and (max-width: 800px) and (min-width: 501px) {
        flex-direction: column;
        gap: 10px;
    }

    @media screen and (max-width: 500px) {
        flex-direction: row-reverse;
        align-items: center;
        height: 40px;
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
    width: calc(100% - 20px);
    overflow-x: hidden;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
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
    transition: all .3s ease;
    margin-left: ${p => `${p.margin}px`};

    @media screen and (max-width: 800px) and (min-width: 501px) {
        flex-direction: column;
    }
`

export const ActionButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    max-width: 70px;

    @media screen and (max-width: 800px) and (min-width: 501px) {
        flex-direction: column;
        height: 100%;
        display: none;
    }

    @media screen and (max-width: 300px) {
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
    height: 80px;

`