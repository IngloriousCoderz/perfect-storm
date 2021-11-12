const firTree = require("./fir-tree");
const oakTree = require("./oak-tree");
const { putAngelOnTopOfTree } = require("./angel");

describe("Angel Decoration", () => {
  it("should decorate a fir tree by putting an angel on top", () => {
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

    let result = firTree.buildTree({ width, height });
    result = putAngelOnTopOfTree(result, width);

    expect(result).toBe(expectedResult);
  });

  it("should decorate a oak tree by putting an angel on top", () => {
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

    let result = oakTree.buildTree({ width, height });
    result = putAngelOnTopOfTree(result, width);

    expect(result).toBe(expectedResult);
  });
});
