import { StyledButton } from "./HomeStyled";

const MobileText = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Space</h1>
      <h1>The final frontier</h1>
      <StyledButton onClick={() => navigate("/SolarSystemPage")}>
        Learn more
      </StyledButton>
    </>
  );
};

export default MobileText;
