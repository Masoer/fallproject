import styled from "styled-components"
import { SpinningVideo, DivVideo } from "../homePage/HomeStyled"
import SpinningMars from "../../video/SpinningMars.mp4"

export const Exploration = ({ locData, crewData }) => {
  return (
    <>
      <ExplorationContainer>
        <DivVideo>
          <SpinningVideo className="videoTag" autoPlay loop muted>
            <source src={SpinningMars} type="video/mp4" />
          </SpinningVideo>
        </DivVideo>
        <Overlay>
          <h1>Explorers</h1>
          <Location>
            <SectionHeader>Where is the ISS?</SectionHeader>
            <p>Latitude: {locData.latitude}</p>
            <p>Longitude: {locData && locData.longitude}</p>
            <p>Altitude: {locData && locData.altitude}km</p>
          </Location>
          <Crew>
            <SectionHeader>Current crew: {crewData.number}</SectionHeader>
            <ul>
              {crewData.people &&
                crewData.people.map((person, idx) => (
                  <StyledList key={idx}>
                    {" "}
                    <a
                      key={idx}
                      href={`https://en.wikipedia.org/wiki/${person.name}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {person.name}
                    </a>
                  </StyledList>
                ))}
            </ul>
          </Crew>
        </Overlay>
      </ExplorationContainer>
    </>
  )
}

const ExplorationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  z-index: 1;
  text-align: center;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 24px;

  h1 {
    font-size: 32px;
    margin-top: 16px;
  }

  p {
    font-size: 18px;
  }

  a,
  li {
    font-size: 32px;
  }

  /* padding: 50px; */
`

const SectionHeader = styled.h2`
  font-size: 32px;
  margin-block: 16px;
  text-align: center;
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
`

const Crew = styled.div`
  text-align: center;
`

const StyledList = styled.li`
  text-align: center;
  margin-top: 16px;
  list-style-type: none;
  text-decoration: none;

  a {
    cursor: pointer;
  }

  a:hover {
    color: cyan;
  }
`
