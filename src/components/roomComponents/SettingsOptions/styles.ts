import styled, { css } from "styled-components";
import {
    blockColor,
    blockHeaderColor,
    invalidOutlineColor,
    myColor_200 } from "../../../styles/variables";

interface SettingsProps {
    isOpen: boolean,
}

export const Container = styled.div<SettingsProps>`
    background-color: ${blockHeaderColor};
    border-radius: 10px;
    position: absolute;
    top: 50px;
    right: 0;
    transition: all .3s ease;
    box-shadow: 5px 5px 30px -5px rgba(0,0,0,.5);
    overflow: hidden;

    ${p => p.isOpen ? css`
        max-height: 200px;
    ` : css`
        max-height: 0;
    `}
`

export const OptionsContainer = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`

export const Option = styled.span`
    cursor: pointer;
    color: ${myColor_200};
    font-size: .9rem;
    width: 100%;
    text-align: right;
    white-space: nowrap;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    svg {
        margin-left: 10px;
    }

    :hover {
        filter: brightness(1.1);
    }
`