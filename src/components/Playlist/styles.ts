import styled from "styled-components";
import { blockColor, myColor_200, myColor_300 } from "../../styles/variables";

export const Container = styled.div`
    background-color: ${blockColor};
    border-radius: 10px;
    height: 100px;
    padding: 10px;
    min-width: 200px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const PlaylistHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & span {
        color: ${myColor_200};
        font-weight: bold;
    }
`