const pineTree = require("./pine-tree");
const oakTree = require("./oak-tree");

const angel = require("./angel-decorator");
const candles = require("./candles-decorator");
const balls = require("./balls-decorator");

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const decorate = compose(
  angel.createDecorator,
  candles.createDecorator,
  balls.createDecorator
);

describe("Christmas Tree", () => {
  it("should combine all decorators on a pine tree", () => {
    const width = 8;
    const height = 6;

    const christmasTree = decorate(pineTree);

    const result = christmasTree.buildTree({ width, height });

    console.log(result);

    const [angelRow, firstCanopyRow, ...rest] = result.split("\n");
    expect(angelRow).toBe("    qp");
    expect(firstCanopyRow).toBe("   ì/\\ì");

    const [trunkRow, baseRow, ...canopyRows] = rest.reverse();
    canopyRows.forEach((canopyRow) =>
      expect(canopyRow).toMatch(/^\s*ì\/[\so*]+\\ì$/)
    );

    expect(baseRow).toBe(" --------");
    expect(trunkRow).toBe("    ||");
  });

  it("should combine all decorators on an oak tree", () => {
    const width = 10;
    const height = 7;

    const christmasTree = decorate(oakTree);

    const result = christmasTree.buildTree({ width, height });

    console.log(result);

    const [angelRow, firstCanopyRow, ...rest] = result.split("\n");
    expect(angelRow).toBe("     qp");
    expect(firstCanopyRow).toBe("ì/--------\\ì");

    const [
      secondTrunkRow,
      firstTrunkRow,
      baseRow,
      lastCanopyRow,
      ...canopyRows
    ] = rest.reverse();
    canopyRows.forEach((canopyRow) =>
      expect(canopyRow).toMatch(/^\s*ì|[\so*]+|ì$/)
    );

    expect(lastCanopyRow).toBe("ì\\--------/ì");
    expect(baseRow).toBe("    \\\\//");
    expect(firstTrunkRow).toBe("     ||");
    expect(secondTrunkRow).toBe("     ||");
  });
});
