const firTree = require("./fir-tree");

describe("Fir Tree", () => {
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

    const result = firTree.buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the canopy", () => {
    const height = 4;
    const expectedResult = `
   /\\
  /  \\
 /    \\
/      \\`.slice(1);

    const result = firTree.buildCanopy({ height });

    expect(result).toBe(expectedResult);
  });

  it("should build the first canopy row", () => {
    const index = 0;
    const height = 4;
    const expectedResult = "   /\\";

    const result = firTree.buildCanopyRow({ index, height });

    expect(result).toBe(expectedResult);
  });

  it("should build a middle canopy row", () => {
    const index = 1;
    const height = 4;
    const expectedResult = "  /  \\";

    const result = firTree.buildCanopyRow({ index, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the last canopy row", () => {
    const index = 3;
    const height = 4;
    const expectedResult = "/      \\";

    const result = firTree.buildCanopyRow({ index, height });

    expect(result).toBe(expectedResult);
  });

  it("should build the base", () => {
    const width = 8;
    const expectedResult = "--------";

    const result = firTree.buildBase({ width });

    expect(result).toBe(expectedResult);
  });

  it("should build the trunk", () => {
    const width = 8;
    const expectedResult = "   ||";

    const result = firTree.buildTrunk({ width });

    expect(result).toBe(expectedResult);
  });
});
