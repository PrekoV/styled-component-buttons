import styled from "styled-components";
import {
    pinkMedium,
    blueDark,
} from "../../constants";

export const GradientOutlinedButtonText = styled.button`
    background: linear-gradient(to right,${pinkMedium} 0%, ${pinkMedium} 21%, ${blueDark} 74%, ${blueDark} 100%);
    -webkit-background-clip: ${props => props.clickedOutlinedRoundedGradientText ?"content-box"  : 'text'};
    -webkit-text-fill-color: ${props => props.clickedOutlinedRoundedGradientText ?"#fff"  : 'transparent'};
    border: 3px solid transparent;
    border-image: ${ props => props.borderImage || `linear-gradient(to right,${pinkMedium} 0%, ${pinkMedium} 21%, ${blueDark} 74%, ${blueDark} 100%)`};
    border-image-slice: 1;
    padding: 7px;
    min-height: 60px;
    min-width: 200px;
    font-size: 20px;
    cursor: pointer;
`;

