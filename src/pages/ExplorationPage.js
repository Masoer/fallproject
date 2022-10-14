import "./ExplorationPage.css"

import { useState, useEffect } from "react"
import { SpinningVideo, DivVideo } from "./homePage/HomeStyled"
import SpinningEarth from "../video/SpinningEarth.mp4"
import SpinningMars from "../video/SpinningMars.mp4"
import SpinningJupiter from "../video/SpinningJupiter.mp4"

const ExplorationPage = () => {
  const [locData, setLocData] = useState({})
  const [crewData, setCrewData] = useState({})

  const fetchLocation = async () => {
    const query = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    ).then((res) => res.json())
    setLocData(query)
  }

  const fetchCrew = async () => {
    const query = await fetch("http://api.open-notify.org/astros.json").then(
      (res) => res.json()
    )
    const filteredQuery = query.people.filter(
      (person) => person.craft === "ISS"
    )
    setCrewData({ number: filteredQuery.length, people: filteredQuery })
  }

  useEffect(() => {
    fetchLocation()
    fetchCrew()
  }, [])

  return (
    <>
      <div className="container">
        <DivVideo>
          <SpinningVideo className="videoTag" autoPlay loop muted>
            <source src={SpinningMars} type="video/mp4" />
          </SpinningVideo>
        </DivVideo>
        <div className="overlay">
          <h1 className="title">Explorers</h1>
          <div className="location">
            <h2>Where is the ISS?</h2>

            <div className="coordinates">
              <p>Latitude: {locData.latitude}</p>
              <p>Longitude: {locData && locData.longitude}</p>
              <p>Altitude: {locData && locData.altitude}km</p>
            </div>

            <div className="crew">
              <h2>Current crew: {crewData.number}</h2>
              <p key="hello there">Click to go to wiki</p>
              <ul>
                {crewData.people &&
                  crewData.people.map((person, idx) => (
                    <li key={idx}>
                      {" "}
                      <a
                        key={idx}
                        href={`https://en.wikipedia.org/wiki/${person.name}`}
                        target="_blank"
                      >
                        {person.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* <div className="crew">
            <h2>Current crew: {crewData.number}</h2>
            <p>Click on name to go to wiki page</p>
            <ul>
              {crewData.people.map((person) => (
                <a
                  href={`https://en.wikipedia.org/wiki/${person.name}`}
                  target="_blank"
                >
                  <li onClick={() => {}}>{person.name}</li>
                </a>
              ))}
            </ul>
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplorationPage
