import styled from "styled-components";
import {
    blockColor,
    myColor_200,
    myColor_300
} from "../../../styles/variables";

export const Container = styled.div`
    position: fixed;
    display: grid;
    place-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
`

export const Content = styled.div`
    border-radius: 10px;
    background-color:  ${blockColor};
    padding: 20px;
    max-width: 320px;
    width: calc(100% - 40px);
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const InviteMessage = styled.strong`
    margin-bottom: 20px;
    color: ${myColor_200};
    font-size: 1.2rem;
    text-align: center;
`

export const RoomUrlContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
export const RoomUrl = styled.strong`
    color: ${myColor_300};
    font-size: .8rem;
    font-style: italic;
    max-width: 200px;
    font-weight: normal;
    margin-bottom: 10px;
    text-align: center;
    word-break: break-all;
`

export const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    transition: all .3s ease;
    :hover {
        filter: brightness(1.1);
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .3;
    position: absolute;
    left: 0;
    top: 0;
`