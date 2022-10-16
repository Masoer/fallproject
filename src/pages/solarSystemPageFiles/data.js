// This is a comment

export const earth = {
  id: "terre",
  name: "La Terre",
  englishName: "Earth",
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
  gravity: 9.8,
  escape: 11190,
  meanRadius: 6371.0084,
  sideralOrbit: 365.256,
  sideralRotation: 23.9345,
  avgTemp: 288,
  wikiShort: `Earth is the third planet from the Sun and the only astronomical
  object known to harbor life. While large volumes of water can be
  found throughout the Solar System, only Earth sustains liquid
  surface water. About 71% of Earth's surface is made up of the
  ocean, dwarfing Earth's polar ice, lakes, and rivers. winds.`,
  wikiLink: "https://en.wikipedia.org/wiki/earth",
  image: require("../../images/planet-earth.jpg"),
}

export const mars = {
  id: "mars",
  name: "Mars",
  englishName: "Mars",
  moons: [
    {
      moon: "Phobos",
      rel: "https://api.le-systeme-solaire.net/rest/bodies/phobos",
    },
    {
      moon: "Deïmos",
      rel: "https://api.le-systeme-solaire.net/rest/bodies/deimos",
    },
  ],
  mass: {
    massValue: 6.41712,
    massExponent: 23,
  },
  gravity: 3.71,
  escape: 5030,
  meanRadius: 3389.5,
  sideralOrbit: 686.98,
  sideralRotation: 24.6229,
  avgTemp: 210,
  wikiShort: `Mars is the fourth planet from the Sun and the second-smallest
  planet in the Solar System, being larger than only Mercury. In
  the English language, Mars is named for the Roman god of war.
  Mars is a terrestrial planet with a thin atmosphere (less than
  1% that of Earth's), and has a crust primarily composed of
  elements similar to Earth's crust, as well as a core made of
  iron and nickel. Mars has surface features such as impact
  craters, valleys, dunes, and polar ice caps. It has two small
  and irregularly shaped moons: Phobos and Deimos.`,
  wikiLink: "https://en.wikipedia.org/wiki/mars",
  image: require("../../images/planet-mars.jpg"),
}

export const venus = {
  id: "venus",
  name: "Vénus",
  englishName: "Venus",
  isPlanet: true,
  moons: null,
  mass: {
    massValue: 4.86747,
    massExponent: 24,
  },
  gravity: 8.87,
  escape: 10360,
  meanRadius: 6051.8,
  sideralOrbit: 224.701,
  sideralRotation: -5832.5,
  avgTemp: 737,
  wikiShort: `Venus is the second planet from the Sun, orbiting it the closest
  to Earth. It is sometimes called Earth's "sister" or "twin"
  planet as it is almost as large and has a similar composition.
  Venus, like Mercury, appears in Earth's sky never far from the
  Sun, either as morning star or evening star with a synodic
  period of 1.6 years. It is, after the Moon, the brightest
  natural object in Earth's sky, capable of casting visible
  shadows on Earth at dark conditions and being visible to the
  naked eye in broad sunlight.`,
  wikiLink: "https://en.wikipedia.org/wiki/Venus",
  image: require("../../images/planet-venus.jpg"),
}
