import styled from "styled-components";
import { blockColor } from "../../styles/variables";

export const Container = styled.div`
    background-color: ${blockColor};
    border-radius: 10px;
    height: 100%;
    height: 100px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`