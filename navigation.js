const directionMap = {
  f: 1,
  b: -1,
};

const calculateCoordinates = (initialCoords, commands) => {
  let { x, y, z, direction } = initialCoords;

  for (let nextStep of commands) {
    if (nextStep === "f" || nextStep === "b") {
      if (direction === "E") {
        x += directionMap[nextStep];
      } else if (direction === "W") {
        x -= directionMap[nextStep];
      } else if (direction === "N") {
        y += directionMap[nextStep];
      } else if (direction === "S") {
        y -= directionMap[nextStep];
      } else if (direction === "Up") {
        z += directionMap[nextStep];
      } else {
        z -= directionMap[nextStep];
      }
    }
  }

  return { x, y, z, direction };
};

module.exports = calculateCoordinates;
