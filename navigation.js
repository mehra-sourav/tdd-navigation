const movementMap = {
  f: {
    N: [0, 1, 0],
    E: [1, 0, 0],
    S: [0, -1, 0],
    W: [-1, 0, 0],
    Up: [0, 0, 1],
    Down: [0, 0, -1],
  },
  b: {
    N: [0, -1, 0],
    E: [-1, 0, 0],
    S: [0, 1, 0],
    W: [1, 0, 0],
    Up: [0, 0, -1],
    Down: [0, 0, 1],
  },
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
      let [xMov, yMov, zMov] = movementMap[nextStep][direction];
      x += xMov;
      y += yMov;
      z += zMov;
    }
    // Block for handling left and right turning
    else if (nextStep === "l" || nextStep === "r") {
      let temp = direction;

      if (["Up", "Down"].includes(direction)) {
        temp = prevDirection;
      }

      prevDirection = direction;
      direction = directionMap[nextStep][temp];
    }
    // Block for handling up and down turning
    else {
      prevDirection = direction;
      direction = nextStep === "u" ? "Up" : "Down";
    }
  }

  return { x, y, z, direction };
};

module.exports = calculateCoordinates;
