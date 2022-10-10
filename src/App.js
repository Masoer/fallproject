import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";
import { Navbar, Navdiv, StyledLink } from "./styles/NavBar";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar sticky="top">
        <Navdiv>
          <StyledLink to="/"> Home </StyledLink>
        </Navdiv>
      </Navbar>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
