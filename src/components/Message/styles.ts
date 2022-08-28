import styled, { css } from "styled-components";
import { adminUsername, blockHeaderColor, myColor_200, myColor_300 } from "../../styles/variables";

interface MessageProps {
    isOwner: boolean,
    isAdmin: boolean,
    diferentUser: boolean,
}

export const Container = styled.div<MessageProps>`
    display: flex;
    flex-direction: ${p => p.isOwner ? 'row-reverse' : 'row'};
    gap: 10px;
    width: 100%;

    ${p => p.diferentUser && css`
        margin-top: 20px;
    `}
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
    justify-content: center;
    flex-direction: column; 
    gap: 8px;
`

export const Username = styled.span<MessageProps>`
    display: block;
    color: ${p => p.isAdmin ? adminUsername : myColor_300};
    font-weight: bold; 
    width: 100%;
    font-size: .9rem;
    text-align: ${p => p.isOwner ? 'right' : 'left'};

`

export const MessageContainer = styled.div<MessageProps>`
    background-color: ${blockHeaderColor};
    border-radius: 10px;
    padding: 10px;
    ${p => !p.diferentUser && 
        p.isOwner
        ? css`margin-right: 50px;`
        : css`margin-left: 50px;`
    }
`

export const MessageText = styled.span`
    font-size: .9rem;
    color: ${myColor_200};
`