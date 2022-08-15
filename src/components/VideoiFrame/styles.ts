import styled from "styled-components";
import { bgColor, blockHeaderColor, purpleColor } from "../../styles/variables";

interface VideoProps {
    duration: number;
    progress: number;
}

export const Container = styled.div`
`

export const VideoContainer = styled.div`
    width: 720px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`

export const NotClick = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
    background-color: transparent;
    
    display: none;
`

export const ControlsContainer = styled.div`
    background-color: ${blockHeaderColor};
    height: 50px;
    margin-top: -3px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0 10px;
`

export const ActionButton = styled.button` 
    min-width: 60px;
    height: 30px;
    margin-right: 10px;
    display: grid;
    place-items: center;
    border-radius: 30px;
    background-color: ${purpleColor};
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