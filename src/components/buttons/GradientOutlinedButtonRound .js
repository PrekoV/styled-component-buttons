// border: double 4px transparent;
//   border-radius: 80px;
//   background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
//   background-origin: border-box;
//   background-clip: content-box, border-box;
import styled from "styled-components";
import { pinkMedium, blueMedium, blueDark } from "../../constants";
import { CustomButton } from "./CustomButton";

export const GradientOutlinedButtonRound = styled(CustomButton)`
    border-radius: 100rem;
    border: solid 3px transparent;
    background-image: ${props =>
        `linear-gradient(101deg,${(props.bgImage && props.bgImage.firstColor) ||
            pinkMedium}, ${(props.bgImage && props.bgImage.secondColor) ||
            blueMedium}), 
            linear-gradient(101deg, ${(props.bgImage &&
            props.bgImage.firstColor) ||
            pinkMedium}, ${(props.bgImage && props.bgImage.secondColor) ||
            blueMedium})`};
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${props =>
        props.clickedOutlinedRounded ? "none" : "2px 1000px 1px #eef7f4 inset"};
    color: ${props => (props.clickedOutlinedRounded ? "#fff" : blueDark)};
    letter-spacing: 3px;
`;
