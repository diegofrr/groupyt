import styled from "styled-components";
import { blockColor, blockHeaderColor, myColor_100, myColor_200, myColor_300, purpleColor } from "../../styles/variables";

export const Container = styled.div`
    background-color: ${blockColor};
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    height: 520px;
    min-width: 200px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const Header = styled.div`
    background-color: ${blockHeaderColor}; 
    position: absolute;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 20px;

    & span {
        color: ${myColor_200};
        font-weight: bold;
        font-size: 1rem;
    }
`

export const Content = styled.div`
    overflow-y: scroll;
    padding-top: 50px;

    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        width: 0;
    }
`

export const SendMessageContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`

export const MessageInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0 10px;
    font-size: .8rem;
    background-color: ${blockHeaderColor};
    color: ${myColor_200};

    &::placeholder {
        color: ${myColor_300};
        font-style: italic;
    }
`

export const SendMessageButton = styled.button`
    display: grid;
    place-items: center;
    min-width: 40px;
    min-height: 40px;
    border-radius: 10px;
    background-color: ${purpleColor};
    transition: all .3s ease;

    &:hover {
        filter: brightness(1.1);
    }
`