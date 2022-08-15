import styled from "styled-components";
import { blockHeaderColor } from "../../styles/variables";

export const Container = styled.div`
    
`

export const VideoContainer = styled.div`
    width: 720px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`

export const NotClick = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
    background-color: transparent;
    
    display: none;
`

export const ControlsContainer = styled.div`
    background-color: ${blockHeaderColor};
    height: 40px;
    margin-top: -3px;
`