import { useNavigate } from "react-router-dom";
import SpinningEarth from "../video/SpinningEarth.mp4";
import {
  DivText,
  DivVideo,
  SpaceText,
  SpinningVideo,
  StyledButton,
} from "./homePage/HomeStyled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <DivVideo>
        <SpinningVideo className="videoTag" autoPlay loop muted>
          <source src={SpinningEarth} type="video/mp4" />
        </SpinningVideo>
        <DivText>
          <SpaceText> Space</SpaceText>
          <SpaceText>The final frontier</SpaceText>
          <StyledButton onClick={() => navigate("/SolarSystemPage")}>
            Learn more
          </StyledButton>
        </DivText>
      </DivVideo>
    </>
  );
};

export default Home;
