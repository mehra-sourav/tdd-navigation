const movementMap = {
  f: 1,
  b: -1,
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
    }
  }

  return { x, y, z, direction };
};

module.exports = calculateCoordinates;
