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

describe("Testing movement functionality", () => {
  test("Spacecraft moves along X axis", () => {
    const commands = ["f", "f", "b", "b", "b"];
    const { x, y, z, direction } = calculateCoordinates(
      initialCoords,
      commands
    );

    expect(x).toBe(-1);
    expect(y).toBe(0);
    expect(z).toBe(0);
    expect(direction).toBe("E");
  });

  test("Spacecraft moves along Y axis", () => {
    const commands = ["f", "f", "b", "b", "b"];
    initialCoords.direction = "N";
    const { x, y, z, direction } = calculateCoordinates(
      initialCoords,
      commands
    );

    expect(x).toBe(0);
    expect(y).toBe(-1);
    expect(z).toBe(0);
    expect(direction).toBe("N");
  });

  test("Spacecraft moves along Z axis", () => {
    const commands = ["f", "f", "b", "b", "b"];
    initialCoords.direction = "Up";
    const { x, y, z, direction } = calculateCoordinates(
      initialCoords,
      commands
    );

    expect(x).toBe(0);
    expect(y).toBe(0);
    expect(z).toBe(-1);
    expect(direction).toBe("Up");
  });
});

describe("Testing turning functionality", () => {
  test("Spacecraft turns left from North ", () => {
    let commands = ["l"];
    initialCoords.direction = "N";
    let result1 = calculateCoordinates(initialCoords, commands);

    expect(result1.x).toBe(0);
    expect(result1.y).toBe(0);
    expect(result1.z).toBe(0);
    expect(result1.direction).toBe("W");
  });
});
