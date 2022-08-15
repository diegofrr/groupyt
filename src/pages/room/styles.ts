import styled from "styled-components";
import { bgColor } from "../../styles/variables";

export const Container = styled.div`
    padding-top: 100px;
    background-color: ${bgColor};
    max-width: calc(100% - 40px);
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
 
export const LeftContent = styled.div``

export const RightContent = styled.div``