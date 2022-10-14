import { useNavigate } from "react-router-dom";
import SpinningEarth from "../video/SpinningEarth.mp4";
import {
  DivText,
  DivTextMobile,
  DivVideo,
  SpaceText,
  SpinningVideo,
  StyledButton,
  MobileButton,
} from "./homePage/HomeStyled";
import MobileText from "./homePage/MobilText";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <MobileText />
      <DivVideo>
        <SpinningVideo autoPlay loop muted>
          <source src={SpinningEarth} type="video/mp4" />
        </SpinningVideo>
        <DivText>
          <SpaceText> Space</SpaceText>
          <SpaceText>The final frontier</SpaceText>
          <StyledButton onClick={() => navigate("/SolarSystemPage")}>
            Learn more
          </StyledButton>
        </DivText>
        <DivTextMobile>
          <MobileButton onClick={() => navigate("/SolarSystemPage")}>
            Learn more
          </MobileButton>
        </DivTextMobile>
      </DivVideo>
    </>
  );
};

export default Home;
