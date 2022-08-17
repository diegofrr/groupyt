import styled from "styled-components";
import { blockColor, btnPriColor, btnSecColor, myColor_100, myColor_200 } from "../../styles/variables";

interface ButtonProps {
    primary: boolean;
}

export const Container = styled.nav`
    background-color: ${blockColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: grid;
    place-items: center;
    z-index: 999;
    padding: 0 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 100%;
    max-width: 1080px;
`

export const RoomName = styled.span`
    color: ${myColor_200};
    font-weight: bold;
    font-size: 1.8rem;

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 400px) {
        max-width: 80px;
    }
`

export const Logo = styled.div`
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    opacity: .2;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        opacity: .3;
    }

    @media screen and (max-width: 600px) {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: 300px) {
       display: none;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`

export const Button = styled.button<ButtonProps>`
    display: grid;
    place-items: center;
    border-radius: 10px;
    background-color: ${p => p.primary ? btnPriColor : btnSecColor};
    height: 40px;
    min-width: 40px;
    transition: all .3s ease;
    padding: 0 10px;

    &:hover {
        filter: brightness(1.1);
    }

    @media screen and (max-width: 500px) {
        height: 40px;

        svg {
            display: inline !important;
        }

        span {
            display: none;
        }
    }
`

export const ButtonText = styled.span<ButtonProps>`
    font-weight: bold;
    font-size: .8rem;
    color: ${p => p.primary ? myColor_100 : myColor_200};
`