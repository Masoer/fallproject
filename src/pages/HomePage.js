import SpinningEarth from "../video/SpinningEarth.mp4";
import styled from "styled-components";

export const SpinningVideo = styled.video`
  height: auto;
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <SpinningVideo className="videoTag" autoPlay loop muted>
        <source src={SpinningEarth} type="video/mp4" />
      </SpinningVideo>
    </>
  );
};

export default Home;
