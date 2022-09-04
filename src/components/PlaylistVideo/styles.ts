import styled, { css } from "styled-components";
import { blockHeaderColor, myColor_100, myColor_200, myColor_300 } from "../../styles/variables";

interface VideoProps {
    playing: boolean
}

export const Container = styled.div`
    border-radius: 10px;
    background-color: ${blockHeaderColor};
    overflow: hidden;
    z-index: 0;
    max-width: 300px;
    min-width: 300px;
    position: relative; 

    @media screen and (max-width: 800px) and (min-width: 501px) {
        min-width: 100%;
    }
`

export const Content = styled.div<VideoProps>`
    display: flex;
    flex-direction: row;

    ${p => p.playing && css`
        ::after {
            content: 'Tocando agora';
            color: ${myColor_200};
            position: absolute;
            left: 0;
            top: 0;
            font-size: .7rem;
            display: grid;
            place-items: center;
            background-color: rgba(0,0,0,.7);
            min-width: 140px;
            height: 80px;

        }
    `} 

    @media screen and (max-width: 800px) and (min-width: 501px) {
        flex-direction: column;

        ::after {
            width: 180px;
        }
    }
`
export const ThumbContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: #000;
    min-width: 140px;
`

export const Thumb = styled.img`
    max-width: 140px;
    max-height: 70px;
    display: grid;
    place-items: center;
`

export const VideoInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;

    strong {
        color: ${myColor_200};
        font-weight: bold;
        font-size: .7rem;
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
        font-size: .7rem;
    }
`