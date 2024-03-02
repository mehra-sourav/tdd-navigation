const movementMap = {
  f: 1,
  b: -1,
};

const directionMap = {
  l: {
    N: "W",
    W: "S",
    S: "E",
    E: "N",
  },
  r: {
    N: "E",
    E: "S",
    S: "W",
    W: "N",
  },
};

const calculateCoordinates = (initialCoords, commands) => {
  let { x, y, z, direction } = initialCoords;

  for (let nextStep of commands) {
    if (nextStep === "f" || nextStep === "b") {
      if (direction === "E") {
        x += movementMap[nextStep];
      } else if (direction === "W") {
        x -= movementMap[nextStep];
      } else if (direction === "N") {
        y += movementMap[nextStep];
      } else if (direction === "S") {
        y -= movementMap[nextStep];
      } else if (direction === "Up") {
        z += movementMap[nextStep];
      } else {
        z -= movementMap[nextStep];
      }
    } else if (nextStep === "r" || nextStep === "l") {
      direction = directionMap[nextStep][direction];
    } else if (nextStep === "u") {
      direction = "Up";
    } else {
      direction = "Down";
    }
  }

  return { x, y, z, direction };
};

module.exports = calculateCoordinates;
