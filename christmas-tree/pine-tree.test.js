/* eslint-disable comma-dangle */
const {
  buildTree,
  buildCanopy,
  buildCanopyRow,
  buildBase,
  buildTrunk,
} = require("./pine-tree");

describe("Pine Tree", () => {
  it("should build the tree", () => {
    const width = 8;
    const height = 6;
    const expectedResult = `
   /\\
  /  \\
 /    \\
/      \\
--------
   ||`.slice(1);

    const result = buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the canopy", () => {
    const height = 4;
    const expectedResult = `
   /\\
  /  \\
 /    \\
/      \\`.slice(1);

    const result = buildCanopy({ height });

    expect(result).toBe(expectedResult);
  });

  it("should build the first canopy row", () => {
    const index = 0;
    const height = 4;
    const expectedResult = "   /\\";

    const result = buildCanopyRow({ index, height });

    expect(result).toBe(expectedResult);
  });

  it("should build a middle canopy row", () => {
    const index = 1;
    const height = 4;
    const expectedResult = "  /  \\";

    const result = buildCanopyRow({ index, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the last canopy row", () => {
    const index = 3;
    const height = 4;
    const expectedResult = "/      \\";

    const result = buildCanopyRow({ index, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the base", () => {
    const width = 8;
    const expectedResult = "--------";

    const result = buildBase({ width });

    expect(result).toBe(expectedResult);
  });

  it("should build the trunk", () => {
    const width = 8;
    const expectedResult = "   ||";

    const result = buildTrunk({ width });

    expect(result).toBe(expectedResult);
  });
});
