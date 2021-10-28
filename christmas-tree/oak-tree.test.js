const {
  buildTree,
  buildCanopy,
  buildCanopyRow,
  buildBase,
  buildTrunk,
} = require("./oak-tree");

describe("Oak Tree", () => {
  it("should build the tree", () => {
    const width = 10;
    const height = 7;
    const expectedResult = `
/--------\\
|        |
|        |
\\--------/
   \\\\//
    ||
    ||`.slice(1);

    const result = buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the canopy", () => {
    const width = 10;
    const height = 4;
    const expectedResult = `
/--------\\
|        |
|        |
\\--------/`.slice(1);

    const result = buildCanopy({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the top canopy row", () => {
    const index = 0;
    const width = 10;
    const height = 4;
    const expectedResult = "/--------\\";

    const result = buildCanopyRow({ index, width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the middle canopy row", () => {
    const index = 1;
    const width = 10;
    const height = 4;
    const expectedResult = "|        |";

    const result = buildCanopyRow({ index, width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the bottom canopy row", () => {
    const index = 3;
    const width = 10;
    const height = 4;
    const expectedResult = "\\--------/";

    const result = buildCanopyRow({ index, width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the base", () => {
    const width = 10;
    const expectedResult = "   \\\\//";

    const result = buildBase({ width });

    expect(result).toBe(expectedResult);
  });

  it("should build the trunk", () => {
    const width = 10;
    const height = 2;
    const expectedResult = `
    ||
    ||`.slice(1);

    const result = buildTrunk({ width, height });

    expect(result).toBe(expectedResult);
  });
});
