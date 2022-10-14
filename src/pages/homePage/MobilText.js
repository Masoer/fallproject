import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const DivMobile = styled.div``;

export const StyledMobile = styled.h1`
  display: none;

  @media only screen and (max-width: 40em) {
    margin: 5px;
    font-size: 3em;
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media only screen and (max-width: 40em) {
    padding: 10px;
    color: white;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.4px);
    -webkit-backdrop-filter: blur(5.4px);
    border: 2px solid black;
  }
`;

const MobileText = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledMobile>Space</StyledMobile>
      <StyledMobile>The final frontier</StyledMobile>
      <MobileButton onClick={() => navigate("/SolarSystemPage")}>
        Learn more
      </MobileButton>
    </>
  );
};

export default MobileText;
