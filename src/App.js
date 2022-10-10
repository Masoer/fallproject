import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ExplorationPage from "./pages/ExplorationPage";
import Home from "./pages/HomePage";
import SolarSystem from "./pages/SolarSystemPage";
import GlobalStyle from "./styles/GlobalStyle";
import { ImageLogo, Navbar, Navdiv, StyledLink } from "./styles/NavBar";
import Logo from "./pages/Logo.png";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar sticky="top">
        <ImageLogo src={Logo} alt="logo" />
        <Navdiv>
          <StyledLink to="/Home"> Home </StyledLink>
          <StyledLink to="/SolarSystemPage"> Solar System</StyledLink>
          <StyledLink to="/ExplorationPage"> Exploration</StyledLink>
          <StyledLink to="/ContactPage"> Contact</StyledLink>
        </Navdiv>
      </Navbar>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="SolarSystemPage" element={<SolarSystem />} />
        <Route path="ExplorationPage" element={<ExplorationPage />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
