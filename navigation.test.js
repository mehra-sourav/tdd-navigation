const calculateCoordinates = require("./navigation");

let initialCoords = {
  x: 0,
  y: 0,
  z: 0,
  direction: "E",
};

beforeEach(() => {
  initialCoords = {
    x: 0,
    y: 0,
    z: 0,
    direction: "E",
  };
});

test("Spacecraft moves along X axis", () => {
  const commands = ["f", "f", "b", "b", "b"];
  const { x, y, z, direction } = calculateCoordinates(initialCoords, commands);

  expect(x).toBe(-1);
  expect(y).toBe(0);
  expect(z).toBe(0);
  expect(direction).toBe("E");
});

test("Spacecraft moves along Y axis", () => {
  const commands = ["f", "f", "b", "b", "b"];
  initialCoords.direction = "N";
  const { x, y, z, direction } = calculateCoordinates(initialCoords, commands);

  expect(x).toBe(0);
  expect(y).toBe(-1);
  expect(z).toBe(0);
  expect(direction).toBe("N");
});
