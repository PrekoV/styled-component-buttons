import React, { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./components/Global";
import { CustomButton } from "./components/buttons/CustomButton";
import {
    MainWrapper,
    ButtomWrapper,
    CircleButtonWrapper
} from "./components/Wrapper";
import { pinkDark, pinkLight, pinkMedium, blueDark } from "./constants";
import { OutlinedButton } from "./components/buttons/OutlinedButton";
import { GradientButton } from "./components/buttons/GradientButton";
import { GradientOutlinedButton } from "./components/buttons/GradientOutlinedButton";
import { GradientOutlinedButtonRound } from "./components/buttons/GradientOutlinedButtonRound ";
import { GradientOutlinedButtonText } from "./components/buttons/GradientOutlinedButtonText";

function App() {
    const [clicked, setClick] = useState(false);
    const [clickedOutlined, setClickOutlined] = useState(false);
    const [gradient, setGradient] = useState(false);
    const [clickedOutlinedRounded, setClickOutlinedRounded] = useState(false);
    const [clickedOutlinedGradient, setClickOutlinedGradient] = useState(false);
    const [
        clickedOutlinedRoundedGradientText,
        setClickedOutlinedRoundedGradientText
    ] = useState(false);
    console.log(gradient);
    return (
        <div className="App">
            <MainWrapper>
                <GlobalStyle />
                <ButtomWrapper>
                    <CustomButton
                        border={clicked && pinkDark}
                        color={clicked && pinkLight}
                        bg={clicked && pinkDark}
                        onMouseEnter={() => setClick(true)}
                        onMouseLeave={() => setClick(false)}
                    >
                        here
                    </CustomButton>
                </ButtomWrapper>
                <ButtomWrapper>
                    <CircleButtonWrapper
                        onMouseEnter={() => setClickOutlined(true)}
                        onMouseLeave={() => setClickOutlined(false)}
                    >
                        <OutlinedButton
                            circle={clickedOutlined}
                            border={clickedOutlined && pinkDark}
                            color={clickedOutlined && pinkDark}
                        >
                            is
                        </OutlinedButton>
                    </CircleButtonWrapper>
                </ButtomWrapper>
                <ButtomWrapper>
                    <GradientButton
                        hovered={gradient}
                        onMouseEnter={() => setGradient(true)}
                        onMouseLeave={() => setGradient(false)}
                    >
                        johny!
                    </GradientButton>
                </ButtomWrapper>
                <ButtomWrapper>
                    <GradientOutlinedButton
                        clickedOutlinedGradient={clickedOutlinedGradient}
                        onMouseEnter={() => setClickOutlinedGradient(true)}
                        onMouseLeave={() => setClickOutlinedGradient(false)}
                    >
                        you
                    </GradientOutlinedButton>
                </ButtomWrapper>
                <ButtomWrapper>
                    <GradientOutlinedButtonRound
                        clickedOutlinedRounded={clickedOutlinedRounded}
                        onMouseEnter={() => setClickOutlinedRounded(true)}
                        onMouseLeave={() => setClickOutlinedRounded(false)}
                    >
                        can't
                    </GradientOutlinedButtonRound>
                </ButtomWrapper>
                <ButtomWrapper>
                    <GradientOutlinedButtonText
                        clickedOutlinedRoundedGradientText={clickedOutlinedRoundedGradientText}
                        onMouseEnter={() => setClickedOutlinedRoundedGradientText(true)}
                        onMouseLeave={() =>
                            setClickedOutlinedRoundedGradientText(false)
                        }
                    >
                        touch
                    </GradientOutlinedButtonText>
                </ButtomWrapper>
                <GradientOutlinedButtonRound
                    bgImage={{ firstColor: pinkMedium, secondColor: blueDark }}
                >
                    <GradientOutlinedButtonText borderImage="none">
                        this
                    </GradientOutlinedButtonText>
                </GradientOutlinedButtonRound>
            </MainWrapper>
        </div>
    );
}

export default App;
