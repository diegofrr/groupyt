import styled from "styled-components";
import { blockHeaderColor, myColor_300 } from "../../styles/variables";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
`

export const Avatar = styled.div` 
    display: grid;
    place-items: center;
    width: 40px;
    min-width: 40px;
    height: 40px;
`

export const UsernameAndMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
`

export const Username = styled.span`
    display: block;
    color: ${myColor_300};
    font-weight: bold;
    width: 100%;
`

export const MessageContainer = styled.div`
    background-color: ${blockHeaderColor};
    border-radius: 10px;
    padding: 10px;
`

export const MessageText = styled.span`
    font-size: .8rem;
    color: ${myColor_300};
`