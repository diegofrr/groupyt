import styled from "styled-components";
import { bgColor } from "../../styles/variables";

export const Container = styled.div`
    position: relative;
    top: 80px;
    padding: 20px 0;
    background-color: ${bgColor};
    margin: 0 auto;
    width: calc(100% - 40px);
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 2vh;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
 
export const LeftContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2vh;
    height: calc(100vh - 120px);

    @media screen and (max-width: 800px) {
        height: auto;
    }
`

export const RightContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2vh;
    height: calc(100vh - 120px);

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`