const pineTree = require("./pine-tree");
const oakTree = require("./oak-tree");
const { createDecorator } = require("./candles-decorator");

describe("Candles decorator", () => {
  it("should decorate a pine tree by putting candles on the canopy", () => {
    const { buildTree } = createDecorator(pineTree);
    const width = 8;
    const height = 6;
    const expectedResult = `
   ì/\\ì
  ì/  \\ì
 ì/    \\ì
ì/      \\ì
 --------
    ||`.slice(1);

    const result = buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should decorate an oak tree by putting candles on the canopy", () => {
    const { buildTree } = createDecorator(oakTree);
    const width = 10;
    const height = 7;
    const expectedResult = `
ì/--------\\ì
ì|        |ì
ì|        |ì
ì\\--------/ì
    \\\\//
     ||
     ||`.slice(1);

    const result = buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });
});
