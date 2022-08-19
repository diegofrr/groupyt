import styled from "styled-components";
import { bgColor, blockColor, blockHeaderColor, myColor_300, purpleColor } from "../../styles/variables";

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
    justify-content: center;
    flex-direction: row;
    padding: 0 10px;
    border-radius: 0 0 10px 10px;
`

export const ActionButton = styled.button` 
    min-width: 60px;
    height: 30px;
    margin-right: 10px;
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

export const CurrentTimeContainer = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    overflow: hidden; 
    background-color: ${bgColor};
    border-radius: 40px;
    z-index: 1;
`

export const BackgroundBar = styled.div<VideoProps>`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #434e81; 
    width: ${p => `${
        (p.progress * 100 / p.duration) > 50
        ? `${p.progress * 100 / p.duration + 1}%`
        : `${p.progress * 100 / p.duration + 3}%`}`};
        
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
        right: -5px;
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
    height: 350px;
    width: ${p => p.width < 800 ? p.width - 56 : p.width * 0.55};
    color: ${myColor_300};
`