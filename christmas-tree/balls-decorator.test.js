const pineTree = require("./pine-tree");
const oakTree = require("./oak-tree");
const { createDecorator } = require("./balls-decorator");

describe("Balls decorator", () => {
  it("should decorate a pine tree by putting balls in the canopy", () => {
    const { buildTree } = createDecorator(pineTree);
    const width = 8;
    const height = 6;

    const result = buildTree({ width, height });

    result
      .split("\n")
      .slice(1, 4)
      .forEach((row) => expect(row).toMatch(/^\s*\/[\so*]+\\$/));
  });

  it("should decorate an oak tree by putting balls in the canopy", () => {
    const { buildTree } = createDecorator(oakTree);
    const width = 10;
    const height = 7;

    const result = buildTree({ width, height });

    result
      .split("\n")
      .slice(1, 3)
      .forEach((row) => expect(row).toMatch(/^\s*|[\so*]+|$/));
  });
});
