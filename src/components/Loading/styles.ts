import styled from "styled-components";
import { myColor_200 } from "../../styles/variables";

export const Container = styled.div`
    height: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: bold;
        color: ${myColor_200};
    }
`