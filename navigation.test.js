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
  test("Spacecraft turns left", () => {
    let commands = ["l"];
    initialCoords.direction = "N";
    let result1 = calculateCoordinates(initialCoords, commands);

    expect(result1.x).toBe(0);
    expect(result1.y).toBe(0);
    expect(result1.z).toBe(0);
    expect(result1.direction).toBe("W");

    commands = ["l", "l"];
    initialCoords.direction = "N";
    let result2 = calculateCoordinates(initialCoords, commands);

    expect(result2.x).toBe(0);
    expect(result2.y).toBe(0);
    expect(result2.z).toBe(0);
    expect(result2.direction).toBe("S");

    commands = ["l", "l", "l"];
    initialCoords.direction = "N";
    let result3 = calculateCoordinates(initialCoords, commands);

    expect(result3.x).toBe(0);
    expect(result3.y).toBe(0);
    expect(result3.z).toBe(0);
    expect(result3.direction).toBe("E");

    commands = ["l", "l", "l", "l"];
    initialCoords.direction = "N";
    let result4 = calculateCoordinates(initialCoords, commands);

    expect(result4.x).toBe(0);
    expect(result4.y).toBe(0);
    expect(result4.z).toBe(0);
    expect(result4.direction).toBe("N");
  });

  test("Spacecraft turns right", () => {
    let commands = ["r"];
    initialCoords.direction = "N";
    let result1 = calculateCoordinates(initialCoords, commands);

    expect(result1.x).toBe(0);
    expect(result1.y).toBe(0);
    expect(result1.z).toBe(0);
    expect(result1.direction).toBe("E");

    commands = ["r", "r"];
    initialCoords.direction = "N";
    let result2 = calculateCoordinates(initialCoords, commands);

    expect(result2.x).toBe(0);
    expect(result2.y).toBe(0);
    expect(result2.z).toBe(0);
    expect(result2.direction).toBe("S");

    commands = ["r", "r", "r"];
    initialCoords.direction = "N";
    let result3 = calculateCoordinates(initialCoords, commands);

    expect(result3.x).toBe(0);
    expect(result3.y).toBe(0);
    expect(result3.z).toBe(0);
    expect(result3.direction).toBe("W");

    commands = ["r", "r", "r", "r"];
    initialCoords.direction = "N";
    let result4 = calculateCoordinates(initialCoords, commands);

    expect(result4.x).toBe(0);
    expect(result4.y).toBe(0);
    expect(result4.z).toBe(0);
    expect(result4.direction).toBe("N");
  });
});
