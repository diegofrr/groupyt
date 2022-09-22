import styled, { css } from "styled-components";
import {
  bgColor,
  blockColor,
  blockHeaderColor,
  myColor_100,
  myColor_200,
  myColor_300,
  purpleColor,
} from "../../../../styles/variables";

interface VideoProps {
  playing: boolean;
}

export const Container = styled.div`
  border-radius: 1.2vh;
  background-color: ${blockHeaderColor};
  z-index: 0;
  max-width: 400px;
  min-width: 300px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 800px) and (min-width: 601px) {
    min-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media screen and (max-width: 800px) and (min-width: 601px) {
    flex-direction: column;

    ::after {
      width: 180px;
    }
  }
`;
export const ThumbContainer = styled.div<VideoProps>`
  display: grid;
  place-items: center;
  background-color: #000;
  min-width: 140px;
  position: relative;

  ${(p) =>
    p.playing &&
    css`
      ::after {
        content: "Tocando agora";
        font-weight: bold;
        color: ${myColor_200};
        position: absolute;
        left: 0;
        top: 0;
        font-size: 0.7rem;
        display: grid;
        place-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
      }
    `}
`;

export const Thumb = styled.img`
  max-width: 140px;
  max-height: 80px;
  display: grid;
  place-items: center;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;

  strong {
    color: ${myColor_200};
    font-weight: bold;
    font-size: 0.7rem;
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
    font-size: 0.7rem;
  }
`;

export const User = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 4px;
  width: 140px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${blockColor};
    border-radius: 10px;
    gap: 3px;
    background-color: #000;

    img {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid black;
    } 

    strong {
      color: ${myColor_200};
      font-size: 0.6rem;
      margin-right: 5px;
    }
  }
`;
