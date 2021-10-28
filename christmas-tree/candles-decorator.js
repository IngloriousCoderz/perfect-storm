module.exports = { createDecorator };

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
${shiftRight(base)}
${shiftRight(trunk)}`;
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
    return putCandlesOnRow(row);
  }

  function putCandlesOnRow(row) {
    const candle = "ì";
    const trimmedRow = row.trim();
    const startOfRow = row.indexOf(trimmedRow);
    const beforeRow = row.substring(0, startOfRow);

    return beforeRow + candle + trimmedRow + candle;
  }

  function shiftRight(str) {
    return str
      .split("\n")
      .map((str) => ` ${str}`)
      .join("\n");
  }
}
