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
  let prevDirection = null;

  for (let nextStep of commands) {
    // Block for handling forward and backward movements
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
    }
    // Block for handling left and right turning
    else if (nextStep === "r" || nextStep === "l") {
      let temp = direction;

      if (["Up", "Down"].includes(direction)) {
        temp = prevDirection;
      }

      prevDirection = direction;
      direction = directionMap[nextStep][temp];
    }
    // Blocks for handling up and down turning
    else if (nextStep === "u") {
      prevDirection = direction;
      direction = "Up";
    } else {
      prevDirection = direction;
      direction = "Down";
    }
  }

  return { x, y, z, direction };
};

module.exports = calculateCoordinates;
