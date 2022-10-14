import styled from "styled-components";

export const StyledInput = styled.input`
  color: black;

  @media only screen and (max-width: 40em) {
    font-size: 2rem;
  }
`;

export const DivForm = styled.div`
  position: absolute;
  top: 35%;
  left: 40%;
  z-index: 1;

  background: rgba(0, 0, 0, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(0, 0, 0, 0.05);

  padding: 50px;

  @media only screen and (max-width: 40em) {
    top: 7%;
    left: 17%;
  }
`;

export const SpaceBetween = styled.div`
  padding: 10px;
`;
