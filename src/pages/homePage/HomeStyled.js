import styled from "styled-components";

export const SpinningVideo = styled.video`
  height: auto;
  width: 100%;
  overflow: hidden;

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

  @media only screen and (max-width: 40em) {
  }
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
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 2px solid black;
`;
