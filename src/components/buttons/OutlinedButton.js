import styled from "styled-components";
import { blueMedium, blueDark } from "../../constants";
import { CustomButton } from "./CustomButton";

export const OutlinedButton = styled(CustomButton)`
    background-color: transparent;
    border: 1px solid ${props => props.border || blueMedium};
    color: ${props => props.color || blueDark};
    border-radius: ${props => props.circle? '100%' : 'none'};
    min-height: ${props => props.circle? '120px' : '60px'};
    min-width: ${props => props.circle? '120px' : '200px'};
    outline: none;

`
