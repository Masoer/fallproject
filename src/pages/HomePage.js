import SpinningEarth from "../video/SpinningEarth.mp4";
import styled from "styled-components";

export const SpinningVideo = styled.video`
  height: auto;
  width: 100%;
  z-index: 0;

  left: 0px;
  top: 0px;
  margin: 0 auto;
  position: relative;
`;

export const DivVideo = styled.div`
  position: relative;
  top: 0;
`;

export const SpaceText = styled.h1`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 5px;
`;

export const DivText = styled.div`
  position: absolute;
  top: 35%;
  left: 40%;
  z-index: 1;
  text-align: center;

  background: rgba(0, 0, 0, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(0, 0, 0, 0.05);

  padding: 50px;
`;

const Home = () => {
  return (
    <>
      <DivVideo>
        <SpinningVideo className="videoTag" autoPlay loop muted>
          <source src={SpinningEarth} type="video/mp4" />
        </SpinningVideo>
        <DivText>
          <SpaceText> Space</SpaceText>
          <SpaceText>The final frontier</SpaceText>
        </DivText>
      </DivVideo>
    </>
  );
};

export default Home;
