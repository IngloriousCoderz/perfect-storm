const { createCandlesDecorator } = require("./candles");
const firTree = require("./fir-tree");
const oakTree = require("./oak-tree");
const { putAngelOnTopOfTree } = require("./angel");

describe("Candles Decorations", () => {
  it("should decorate a fir tree by putting candles on its canopy", () => {
    const width = 8;
    const height = 6;
    const expectedResult = `
   ì/\\ì
  ì/  \\ì
 ì/    \\ì
ì/      \\ì
 --------
    ||`.slice(1);

    const candlesDecorator = createCandlesDecorator(firTree);

    const result = candlesDecorator.buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should decorate a fir tree by putting an angel and candles", () => {
    const width = 8;
    const height = 6;
    const expectedResult = `
    qp
   ì/\\ì
  ì/  \\ì
 ì/    \\ì
ì/      \\ì
 --------
    ||`.slice(1);

    const candlesDecorator = createCandlesDecorator(firTree);

    let result = candlesDecorator.buildTree({ width, height });
    result = putAngelOnTopOfTree(result);

    expect(result).toBe(expectedResult);
  });

  it("should decorate a fir tree by putting an angel and candles", () => {
    const width = 10;
    const height = 7;
    const expectedResult = `
     qp
ì/--------\\ì
ì|        |ì
ì|        |ì
ì\\--------/ì
    \\\\//
     ||
     ||`.slice(1);

    const candlesDecorator = createCandlesDecorator(oakTree);

    let result = candlesDecorator.buildTree({ width, height });
    result = putAngelOnTopOfTree(result);

    expect(result).toBe(expectedResult);
  });
});
