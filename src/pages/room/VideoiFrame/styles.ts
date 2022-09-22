import styled from "styled-components";
import { 
    bgColor,
    blockColor,
    blockHeaderColor,
    myColor_200,
    myColor_300,
    purpleColor
} from "../../../styles/variables";

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
    height: 100%;

    @media screen and (max-width: 800px) {
        height: auto;
    }
`

export const VideoContainer = styled.div<VideoContainerProps>`
    width: ${p => p.width <= 800 ? `${p.width - 56}px` : `${p.width * 0.55}px`};
    position: relative; 
    margin: 0 auto;
    border-radius: 2vh;
    height: 100%;
    border-radius: 2vh;
    overflow: hidden;
` 

export const VideoContent = styled.div`
    overflow: hidden;
`

export const NotClick = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 8px - 7vh);
    user-select: none;
`

export const EmptyVideo = styled.div<VideoContainerProps>`
    display: grid;
    place-items: center;
    background-color: ${blockColor};
    height: 100%;
    width: ${p => p.width < 800 ? p.width - 56 : p.width * 0.55};
    color: ${myColor_300};
    min-height: 30vh;
`

export const ControlsContainer = styled.div`
    background-color: ${blockColor};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10px;
    gap: 2vh;
    border-radius: 0 0 10px 10px;
    height: calc(7vh + 8px);
    margin-top: -4px;
`

export const SkipVideo = styled.button`
    background-color: ${purpleColor};
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    left: 80px;
    width: 60px;
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
    display: none;
    
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
    justify-content: center;
    width: 100%;
    flex-direction: column;
    max-width: 300px;
    text-align: center;

    strong {
        color: ${myColor_200};
        font-weight: bold;
        font-size: .8rem;
        color: ${myColor_200};
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        display: flexbox;
        max-height: 32px;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        box-orient: vertical;
        -webkit-box-orient: vertical;
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