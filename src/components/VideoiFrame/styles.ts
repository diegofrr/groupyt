import styled from "styled-components";
import { bgColor, blockColor, blockHeaderColor, myColor_200, myColor_300, purpleColor } from "../../styles/variables";

interface VideoProps {
    duration: number;
    progress: number;
}

interface VideoContainerProps {
    width: number,
    height: number,
}

export const Container = styled.div`
    border-radius: 10px;
    overflow: hidden;
`

export const VideoContainer = styled.div<VideoContainerProps>`
    width: ${p => p.width <= 800 ? `${p.width - 56}px` : `${p.width * 0.55}px`};
    overflow: hidden;
    position: relative; 
    margin: 0 auto;
` 

export const NotClick = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
    background-color: transparent;
`

export const ControlsContainer = styled.div`
    background-color: ${blockColor};
    height: 50px;
    margin-top: -4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10px;
    gap: 10px;
    border-radius: 0 0 10px 10px;
`

export const SkipVideo = styled.button`
    background-color: ${purpleColor};
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 80px;
    border-radius: 100px;
    transition: all .3s ease;

    :hover {
        filter: brightness(1.1);
    }
`

export const ActionButton = styled.button` 
    min-width: 60px;
    height: 30px;
    display: grid;
    place-items: center; 
    border-radius: 30px;
    background-color: ${purpleColor};
    transition: all .3s ease;
    z-index: 1000;
    
    &:hover {
        filter: brightness(1.1)
    }
`

export const ProgressTime = styled.div`
    width: 60px;
    min-width: 60px;
    display: grid;
    place-items: center;

    span {
        color: ${myColor_300};
    }
`

export const VideoInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    max-width: 300px;

    strong {
        color: ${myColor_200};
        font-weight: bold;
        font-size: .8rem;
    }

    span {
        color: ${myColor_300};
        font-size: .8rem;

        text-overflow: ellipsis;
        overflow: hidden;
        display: flexbox;
        max-height: 32px;
        line-clamp: 1;
        -webkit-line-clamp: 1;
        box-orient: vertical;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -ms-word-break: break-all;
    }

`

export const CurrentTimeContainer = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    overflow: hidden; 
    background-color: ${bgColor};
    border-radius: 40px;
    z-index: 1;

    /// SOMENTE PARA TROCAR DE VÍDEO
    /// NÃO TERÁ ESTE RECURSO NO FINAL DO PROJETO
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
`

export const BackgroundBar = styled.div<VideoProps>`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #434e81; 
    width: ${p => `${
        (p.progress * 100 / p.duration) > 50
        ? `${p.progress * 100 / p.duration + 0}%`
        : `${p.progress * 100 / p.duration + -0}%`}`};
        
    z-index: -1;
    height: 30px;
    border-radius: 100px;
    user-select: none;

    &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        right: 0px;
        top: 0;
        background-color: ${purpleColor};
    }
`

export const CurrentTimeBar = styled.input`
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 30px; 
    outline: none;
    cursor: pointer;
    background-color: transparent;
    z-index: 1;

    &::-moz-range-thumb {
        width: 30px;
        height: 30px;
        border-radius: 50%; 
        background: ${purpleColor};
        cursor: pointer;
        border: none;
        opacity: 0;
    }

    &::-ms-range-thumb {
        width: 30px;
        height: 30px;
        border-radius: 50%; 
        background: ${purpleColor};
        cursor: pointer; 
        border: none; 
        opacity: 0;
    }

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;  
        background: ${purpleColor};
        cursor: pointer;
        border: none;
        opacity: 0;
    }
`

export const EmptyVideo = styled.div<VideoContainerProps>`
    display: grid;
    place-items: center;
    background-color: ${blockColor};
    height: 400px;
    width: ${p => p.width < 800 ? p.width - 56 : p.width * 0.55};
    color: ${myColor_300};
`