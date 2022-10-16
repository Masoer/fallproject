import { useState, useRef } from "react"
import { StyledLink } from "../styles/NavBar"
import Logo from "../img/Logo.png"

import { Header, NavList, NavToggle, ImgMobile } from "./StyledHeader"

const NavBarHeader = () => {
  const [active, setActive] = useState(false)

  const menuToggle = () => {
    setActive(!active)
    console.log("yo")
  }

  const autoClose = () => {
    setActive(false)
  }

  const menu = useRef(null)

  const closeMenu = (e) => {
    if (menu.current && active && !menu.current.contains(e.target)) {
      setActive(false)
    }
  }

  document.addEventListener("mousedown", closeMenu)

  return (
    <>
      <Header ref={menu}>
        <ImgMobile src={Logo} alt="logo" />
        <NavList active={active}>
          <StyledLink onClick={autoClose} to="/HomePage">
            Home
          </StyledLink>
          <StyledLink onClick={autoClose} to="/SolarSystemPage">
            Solarsystem
          </StyledLink>
          <StyledLink onClick={autoClose} to="/ExplorationPage">
            Exploration
          </StyledLink>
          <StyledLink onClick={autoClose} to="/ContactPage">
            Contact
          </StyledLink>
        </NavList>
        <NavToggle active={active} onClick={menuToggle}>
          <span className="lines line--1"></span>
          <span className="lines line--2"></span>
          <span className="lines line--3"></span>
        </NavToggle>
      </Header>
    </>
  )
}

export default NavBarHeader
