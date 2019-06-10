import styled from "styled-components";
import {
    pinkMedium,
    blueMedium,
    blueDark,
} from "../../constants";
import { OutlinedButton } from "./OutlinedButton";

export const GradientOutlinedButton = styled(OutlinedButton)`
    border-left: 5px solid ${blueMedium};
    border-right: 5px solid ${pinkMedium};
    background-image: linear-gradient(90deg, ${blueMedium}, ${pinkMedium}), linear-gradient(90deg, ${blueMedium}, ${pinkMedium});
    background-size: ${props => props.clickedOutlinedGradient ? "100% 30px":"100% 5px"};
    background-position: 0 0, 0 100%;
    background-repeat: no-repeat;
    transition: .3s;
    color: ${props => props.clickedOutlinedGradient ? "#fff" : blueDark};
    letter-spacing: 3px;
`;

