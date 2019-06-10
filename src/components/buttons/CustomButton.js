import styled from "styled-components";
import { pinkMedium, pinkLight, pinkDark } from "../../constants";

export const CustomButton = styled.button`
    background-color: ${props => props.bg || pinkLight};
    border: 1px solid ${props => props.border || pinkMedium};
    color: ${props => props.color || pinkDark};
    padding: 7px;
    min-height: 60px;
    min-width: 200px;
    font-size: 20px;
    /* outline: none; */
    outline-color: ${pinkLight};
    letter-spacing: 3px;
    transition: .5s;
    cursor: pointer
`
