import { Exploration } from "./explorationPageFiles/styled"
import { useState, useEffect } from "react"

// Troubleshooting mixed content warning

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

  if (crewData) {
    return (
      <>
        <Exploration locData={locData} crewData={crewData} />
      </>
    )
  }
}

export default ExplorationPage
