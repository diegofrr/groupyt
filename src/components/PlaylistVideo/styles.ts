import styled from "styled-components";
import { blockHeaderColor, myColor_200, myColor_300 } from "../../styles/variables";

export const Container = styled.div`
    border-radius: 10px;
    background-color: ${blockHeaderColor};
    overflow: hidden;
    z-index: 0;
    max-width: 400px;
    min-width: 300px;
    position: relative; 

    @media screen and (max-width: 800px) and (min-width: 501px) {
        min-width: 100%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 800px) and (min-width: 501px) {
        flex-direction: column;
    }
`

export const Thumb = styled.img`
    max-height: 80px;
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