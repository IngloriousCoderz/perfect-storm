const firTree = require("./fir-tree");
const oakTree = require("./oak-tree");
const { createDecorator } = require("./angel-decorator");

describe("Angel Decorator", () => {
  it("should decorate a fir tree by putting an angel on top", () => {
    const { buildTree } = createDecorator(firTree);
    const width = 8;
    const height = 6;
    const expectedResult = `
   qp
   /\\
  /  \\
 /    \\
/      \\
--------
   ||`.slice(1);

    const result = buildTree({ width, height });

    expect(result).toBe(expectedResult);
  });

  it("should decorate an oak tree by putting an angel on top", () => {
    const { buildTree } = createDecorator(oakTree);
    const width = 10;
    const height = 7;
    const expectedResult = `
    qp
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
});
