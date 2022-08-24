import styled from "styled-components";
import { bgColor, btnPriColor, btnSecColor, myColor_100, myColor_200, purpleColor } from "./variables";

interface ButtonProps {
    primary: boolean;
}

interface BackImage {
    src: string;
}

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${bgColor};
    display: grid;
    place-items: center;
`

export const Content = styled.div`
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    max-width: 1080;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 40px;

    &>* {
        z-index: 1;
    }
`

export const LogoContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`

export const Description = styled.span`
    display: block;
    font-weight: bold;
    font-size: 2em;
    max-width: 400px;
    text-align: center;
    color: ${myColor_200};
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    max-width: 400px; 

    @media screen and (max-width: 400px) {
        flex-direction: column;
        & > * {
            width: 100%;
        }
    }
`

export const Button = styled.button<ButtonProps>`
    display: grid;
    place-items: center;
    border-radius: 10px;
    background-color: ${p => p.primary ? btnPriColor : btnSecColor};
    height: 50px;
    width: 100%;
    transition: all .3s ease;

    @media screen and (max-width: 500px) {
        height: 40px;
    }

    :hover {
        filter: brightness(1.1);
    }
    
    :active {
        transform: scale(.95); 
    }
    
`

export const ButtonText = styled.span<ButtonProps>`
    font-weight: bold;
    font-size: .8rem;
    color: ${p => p.primary ? myColor_100 : myColor_200};
`

export const BackImage = styled.img<BackImage>`
    position: fixed;
    top: 0px;
    width: 1200px;
    z-index: 0;
    transform: rotate(-90deg);
    opacity: 1%;
    user-select: none;
    animation: rotate infinite 1000s alternate-reverse linear;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(9999deg);
        }
    }

    @media screen and (max-width: 700px) {
        top: 0;
        width: 800px;
    }

`

export const BackImage2 = styled.img<BackImage>`
    position: fixed;
    right: -300px;
    top: -300px;
    width: 700px;
    z-index: 0;
    transform: rotate(0deg);
    opacity: 1%;
    animation: rotate infinite 1000s alternate-reverse linear;
    user-select: none;
    display: none;
    
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(-9999deg);
        }
    }

    @media screen and (max-width: 700px) {
        width: 500px;
        top: -150px;
    }

    @media screen and (max-width: 500px) {
        width: 500px;
        top: 0px;
    }
`

export const NotFoundDescription = styled.span`
    margin-top: -40px;
    font-size: 2rem;
    font-weight: bold;
    color: ${myColor_200};
    text-align: center;
`
