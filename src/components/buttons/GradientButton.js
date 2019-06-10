// background: linear-gradient(to top, #fefcea, #f1da36);
import styled from "styled-components";
import { pinkMedium, pinkDark, blueMedium, blueLight } from "../../constants";
import { CustomButton } from "./CustomButton";

export const GradientButton = styled(CustomButton)`
    background: linear-gradient(to top, ${pinkMedium}, ${blueMedium});
    outline: none;
    border: none;
    color: ${props => props.hovered? blueLight: pinkDark};
`;
