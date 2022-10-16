import styled from "styled-components"
import { earth, mars, venus } from "./data"

export const Planets = () => {
  return (
    <PlanetsContainer>
      <PageTitle>The Sol System</PageTitle>
      <SubTitle>Most likely TerraForming/Colonization targets:</SubTitle>

      {/* Struggled to implement the visibility toggle using styled-components  */}

      {/* <PlanetSelection>
        <TogglePlanetBtn
          onClick={() =>
            setToggleVisibility({
              ...toggleVisibility,
              earth: !toggleVisibility.earth,
            })
          }
        >
          Earth
        </TogglePlanetBtn>
        <TogglePlanetBtn
          value="mars"
          onClick={() =>
            setToggleVisibility({
              ...toggleVisibility,
              mars: !toggleVisibility.mars,
            })
          }
        >
          Mars
        </TogglePlanetBtn>
        <TogglePlanetBtn
          value="venus"
          onClick={() =>
            setToggleVisibility({
              ...toggleVisibility,
              venus: !toggleVisibility.venus,
            })
          }
        >
          Venus
        </TogglePlanetBtn>
      </PlanetSelection> */}
      <Planet props={earth} id="earth" />
      <Planet props={mars} id="mars" />
      <Planet props={venus} id="venus" />
    </PlanetsContainer>
  )
}

export const Planet = (props) => {
  const {
    englishName,
    gravity,
    moons,
    meanRadius,
    sideralOrbit,
    sideralRotation,
    avgTemp,
    wikiShort,
    wikiLink,
    image,
  } = props.props

  if (props) {
    return (
      <>
        <PlanetContainer id={englishName}>
          <PlanetTitle>{englishName}</PlanetTitle>
          <PlanetImage src={image} alt={englishName}></PlanetImage>
          <PlanetStats>
            <StyledH3>Stats</StyledH3>
            <p>
              Gravity: <RightSpan>{gravity} G</RightSpan>
            </p>
            <p>
              Radius:
              <RightSpan>{meanRadius.toFixed(2)} km</RightSpan>
            </p>
            <p>
              Hours in a Day:
              <RightSpan>{sideralRotation}</RightSpan>
            </p>
            <p>
              Days in a Year:
              <RightSpan>{sideralOrbit}</RightSpan>
            </p>
            <p>
              Average Temp:
              <RightSpan>{avgTemp}</RightSpan>
            </p>
            <p>
              Moons:
              <RightSpan>{moons ? moons.length : "0"}</RightSpan>
            </p>
          </PlanetStats>

          <PlanetInfo>
            <p>{wikiShort}</p>
            <WikiBtn href={wikiLink} target="_blank">
              Read More...
            </WikiBtn>
          </PlanetInfo>
        </PlanetContainer>
      </>
    )
  }
}

// Planet components
const PlanetContainer = styled.div`
  display: flex;
  /* display: ${(props) => (props.visibility ? "none" : "flex")}; */
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-block: 2rem;
`

const PlanetTitle = styled.h2`
  font-size: 2.5rem;

  @media screen and (width < 768px) {
    font-size: 4rem;
    font-weight: 700;
  }
`
const PlanetImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  display: inline-block;
`
const PlanetStats = styled.div`
  border: 1px solid gray;
  width: 100%;
  padding-inline: 1rem;

  p {
    font-size: 3rem;
  }

  @media screen and (width > 768px) {
    border: none;
    width: 40%;
    margin-top: -55%;
    margin-left: 55%;
    z-index: 999;
    width: 400px;
    p {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }
`
const StyledH3 = styled.h3`
  text-align: center;
  font-size: 1.5rem;

  @media screen and (width < 768px) {
    font-size: 3rem;
  }
`

const RightSpan = styled.span`
  font-size: 3rem;
  float: right;
`

const PlanetInfo = styled.div`
  padding-inline: 0.5rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    font-size: 3rem;
    margin-block: 1.5rem;
  }

  @media screen and (width > 768px) {
    margin-top: 37%;

    p {
      font-size: 1rem;
    }
  }
`
const WikiBtn = styled.a`
  font-size: 4rem;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: skyblue;

  &:hover {
    color: purple;
  }
  @media screen and (width > 768px) {
    font-size: 1.5rem;
    text-align: left;
    margin: 0;
  }
`

const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  margin-inline: auto;
`
const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-block: 1rem;
`

const SubTitle = styled.p`
  font-size: 2rem;
`

// const PlanetSelection = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   gap: 0.5rem;
// `
// const TogglePlanetBtn = styled.button`
//   font-size: 1.5rem;
//   background: none;
//   cursor: pointer;
//   border: 2px solid lime;
//   padding: 0.5rem 1rem;
//   border-radius: 6px;

//   &:hover {
//     border-color: purple;
//     transform: scale(1.1);
//   }
// `
