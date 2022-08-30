import styled from "styled-components";
import { bgColor, btnPriColor, btnSecColor, myColor_100, myColor_200, myColor_300, purpleColor } from "./variables";

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
    display: grid;
    place-items: center;
    max-width: 250px;
`

export const Description = styled.span`
    display: block;
    font-size: 4rem;
    max-width: 600px;
    font-weight: bold;
    text-align: center;
    color: ${myColor_200};

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }
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

export const RepositoryLink = styled.a`
    color: ${myColor_300};
    display: flex;
    font-size: .8rem;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding: 8px 10px;
    border-radius: 6px;
    transition: all .3s ease;
    font-weight: bold;
    filter: brightness(.7);
    z-index: 1000;

    position: absolute;
    right: 20px;
    bottom: 20px;

    :hover {
       filter: brightness(1);
    }

    svg {
        margin-right: 10px;
    }
`

export const Button = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    background-color: ${p => p.primary ? btnPriColor : btnSecColor};
    height: 50px;
    width: 100%;
    transition: all .3s ease;
    position: relative;

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
