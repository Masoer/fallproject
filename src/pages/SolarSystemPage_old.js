import SolSystem from "../images/solar-system.jpg"
import PlanetEarth from "../images/planet-earth.jpg"
import PlanetMars from "../images/planet-mars.jpg"
import PlanetVenus from "../images/planet-venus.jpg"

import "./SolarSystemPage.css"
import { useState, useEffect } from "react"

const earth = {
  id: "terre",
  name: "La Terre",
  englishName: "Earth",
  isPlanet: true,
  moons: [
    {
      moon: "La Lune",
      rel: "https://api.le-systeme-solaire.net/rest/bodies/lune",
    },
  ],
  mass: {
    massValue: 5.97237,
    massExponent: 24,
  },
  vol: {
    volValue: 1.08321,
    volExponent: 12,
  },
  density: 5.5136,
  gravity: 9.8,
  escape: 11190,
  meanRadius: 6371.0084,
  equaRadius: 6378.1366,
  polarRadius: 6356.8,
  sideralOrbit: 365.256,
  sideralRotation: 23.9345,
  avgTemp: 288,
  bodyType: "Planet",
}

const SolarSystem = () => {
  const [data, setData] = useState(earth)

  // Use The Solar System Open Data, to fetch info about 3x planets
  const fetchData = async () => {
    const earth = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/earth"
    ).then((response) => response.json())

    const mars = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/mars"
    ).then((response) => response.json())

    const venus = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/venus"
    ).then((response) => response.json())

    setData({
      earth,
      mars,
      venus,
    })
  }

  console.log(data)

  useEffect(() => {
    console.log(data)
  }, [])

  if (data) {
    return (
      <>
        <div className="container">
          <h1 className="title">The Sol System</h1>
          <div className="selection">
            <button
              className="btn-select"
              value="earth"
              onClick={(e) => console.log(data)}
            >
              Earth
            </button>
            <button
              className="btn-select"
              value="mars"
              onClick={(e) => console.log(e.target.value)}
            >
              Mars
            </button>
            <button
              className="btn-select"
              value="venus"
              onClick={(e) => console.log(e.target.value)}
            >
              Venus
            </button>
          </div>

          <div className="planet" id="earth">
            <h2>Earth</h2>

            <img src={PlanetEarth} alt="Earth" />
            <div className="stats">
              <h3>Stats </h3>
              <p>
                Gravity: <span className="right">{earth.gravity} G</span>
              </p>
              <p>
                Radius:
                <span className="right">{earth.meanRadius.toFixed(2)} km</span>
              </p>
              <p>
                Hours in a Day:
                <span className="right">
                  {earth.sideralRotation.toFixed(2)}
                </span>
              </p>
              <p>
                Days in a Year:
                <span className="right">{earth.sideralOrbit.toFixed(2)}</span>
              </p>
              <p>
                Average Temp: <span></span>
                <span className="right">{earth.avgTemp} K</span>
              </p>
              <p>
                Number of moons:
                <span className="right">
                  {earth.moons ? earth.moons.length : "0"}
                </span>
              </p>
            </div>

            <div className="info">
              <p>
                Earth is the third planet from the Sun and the only astronomical
                object known to harbor life. While large volumes of water can be
                found throughout the Solar System, only Earth sustains liquid
                surface water. About 71% of Earth's surface is made up of the
                ocean, dwarfing Earth's polar ice, lakes, and rivers. winds.
              </p>
              <button className="btn-wiki">Read More..</button>
            </div>
          </div>

          <div className="planet hidden" id="mars">
            <h2>Mars</h2>
            <img src={PlanetMars} alt="Mars" />
            <div className="stats">
              <h3>Stats </h3>
              <p>
                Gravity: <span className="right">{earth.gravity} G</span>
              </p>
              <p>
                Radius:
                <span className="right">{earth.meanRadius.toFixed(2)} km</span>
              </p>
              <p>
                Hours in a Day:
                <span className="right">
                  {earth.sideralRotation.toFixed(2)}
                </span>
              </p>
              <p>
                Days in a Year:
                <span className="right">{earth.sideralOrbit.toFixed(2)}</span>
              </p>
              <p>
                Average Temp: <span></span>
                <span className="right">{earth.avgTemp} K</span>
              </p>
              <p>
                Number of moons:
                <span className="right">
                  {earth.moons ? earth.moons.length : "0"}
                </span>
              </p>
            </div>
            <div className="info">
              <p>
                Mars is the fourth planet from the Sun and the second-smallest
                planet in the Solar System, being larger than only Mercury. In
                the English language, Mars is named for the Roman god of war.
                Mars is a terrestrial planet with a thin atmosphere (less than
                1% that of Earth's), and has a crust primarily composed of
                elements similar to Earth's crust, as well as a core made of
                iron and nickel. Mars has surface features such as impact
                craters, valleys, dunes, and polar ice caps. It has two small
                and irregularly shaped moons: Phobos and Deimos.
              </p>
              <button className="btn-wiki">Read More..</button>
            </div>
          </div>

          <div className="planet" id="venus">
            <h2>Venus</h2>
            <img src={PlanetVenus} alt="venus" />
            <div className="stats">
              <h3>Stats </h3>
              <p>
                Gravity: <span className="right">{earth.gravity} G</span>
              </p>
              <p>
                Radius:
                <span className="right">{earth.meanRadius.toFixed(2)} km</span>
              </p>
              <p>
                Hours in a Day:
                <span className="right">
                  {earth.sideralRotation.toFixed(2)}
                </span>
              </p>
              <p>
                Days in a Year:
                <span className="right">{earth.sideralOrbit.toFixed(2)}</span>
              </p>
              <p>
                Average Temp: <span></span>
                <span className="right">{earth.avgTemp} K</span>
              </p>
              <p>
                Number of moons:
                <span className="right">
                  {earth.moons ? earth.moons.length : "0"}
                </span>
              </p>
            </div>
            <div className="info">
              <p>
                Venus is the second planet from the Sun, orbiting it the closest
                to Earth. It is sometimes called Earth's "sister" or "twin"
                planet as it is almost as large and has a similar composition.
                Venus, like Mercury, appears in Earth's sky never far from the
                Sun, either as morning star or evening star with a synodic
                period of 1.6 years. It is, after the Moon, the brightest
                natural object in Earth's sky, capable of casting visible
                shadows on Earth at dark conditions and being visible to the
                naked eye in broad sunlight.
              </p>
              <button className="btn-wiki">Read More..</button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div>
        <h2>Something went wrong</h2>
      </div>
    )
  }
}

export default SolarSystem
