module.exports = { createDecorator };

const AVAILABLE_BALLS = "o *";

function createDecorator(decorated) {
  return {
    buildTree,
    buildCanopy,
    buildCanopyRow,
    buildBase: decorated.buildBase,
    buildTrunk: decorated.buildTrunk,
  };

  function buildTree({ width, height }) {
    const base = decorated.buildBase({ width });
    const baseHeight = base.split("\n").length;

    const trunk = decorated.buildTrunk({ width });
    const trunkHeight = trunk.split("\n").length;

    const canopyHeight = height - baseHeight - trunkHeight;
    return `${buildCanopy({ width, height: canopyHeight })}
${base}
${trunk}`;
  }

  function buildCanopy({ width, height }) {
    const result = [];
    for (let i = 0; i < height; i++) {
      result.push(buildCanopyRow({ index: i, width, height }));
    }
    return result.join("\n");
  }

  function buildCanopyRow({ index, width, height }) {
    const row = decorated.buildCanopyRow({ index, width, height });
    return putBallsInRow(row);
  }

  function putBallsInRow(row) {
    const tokens = row.split(/[^\s]+/);

    if (!rowHasRoomForBalls(tokens)) {
      return row;
    }

    const [, insideCanopy] = tokens;
    const leftIndex = row.lastIndexOf(insideCanopy);
    const rightIndex = leftIndex + insideCanopy.length;

    for (let j = leftIndex; j < rightIndex; j++) {
      const randomBall = chooseRandomBall();
      row = row.slice(0, j) + randomBall + row.slice(j + 1);
    }

    return row;
  }

  function rowHasRoomForBalls(tokens) {
    return tokens.length === 3;
  }

  function chooseRandomBall() {
    const index = Math.floor(Math.random() * AVAILABLE_BALLS.length);
    return AVAILABLE_BALLS[index];
  }
}
