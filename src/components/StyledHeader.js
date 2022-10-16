import styled from "styled-components"

export const Header = styled.header`
  display: none;
  @media only screen and (max-width: 40em) {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0 auto;
    max-width: 90%;
    align-items: center;
    overflow-y: hidden;

    position: sticky;
    top: 5px;
    z-index: 1001;
  }
`

export const NavList = styled.nav`
  display: flex;
  flex-wrap: wrap;

  transition: 0.6s;
  @media (max-width: 820px) {
    flex-direction: column;
    position: fixed;
    top: 50px;
    right: 0;
    gap: 40px;
    width: 50%;
    height: 85vh;
    padding-top: 40px;
    overflow: hidden;

    background: rgba(0, 0, 0, 0.45);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.4px);
    -webkit-backdrop-filter: blur(5.4px);
    border: 1px solid rgba(0, 0, 0, 0.05);

    transform: translateX(${(props) => (props.active ? "0%" : "150%")});
  }
`

export const NavToggle = styled.div`
  position: relative;
  width: 1rem;
  height: 1.5rem;
  cursor: pointer;
  display: none;

  margin-left: 50%;

  .lines {
    position: absolute;
    background: white;
    border-radius: 5px;
    transition: 0.4s;
    height: 2.5px;
    width: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .line--1 {
    transform: translate(-50%, ${(props) => (props.active ? "0" : "10px")})
      rotate(${(props) => (props.active ? "-45deg" : "0")});
  }

  .line--2 {
    width: ${(props) => (props.active ? "0%" : "")};
  }

  .line--3 {
    transform: translate(-50%, ${(props) => (props.active ? "0" : "-13px")})
      rotate(${(props) => (props.active ? "45deg" : "0")});
  }

  @media (max-width: 820px) {
    display: block;
  }
`

export const ImgMobile = styled.img`
  height: auto;
  width: 45%;
`
