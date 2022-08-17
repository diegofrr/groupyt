import styled from "styled-components";
import { bgColor } from "../../styles/variables";

export const Container = styled.div`
    padding-top: 100px;
    background-color: ${bgColor};
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin: 0 auto;
    max-width: 1080px;
    min-height: 100vh;
    width: calc(100% - 40px);
    padding-bottom: 20px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
 
export const LeftContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`

export const RightContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
`