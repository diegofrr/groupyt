import styled from "styled-components";
import { blockColor, blockHeaderColor } from "../../styles/variables";

export const Container = styled.div`
    background-color: ${blockColor};
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    min-width: 200px;
    max-width: 300px;
`

export const Header = styled.div`
    background-color: ${blockHeaderColor}; 
`

export const Content = styled.div`` 