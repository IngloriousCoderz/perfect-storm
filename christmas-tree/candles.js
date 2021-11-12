module.exports = { createCandlesDecorator };

function createCandlesDecorator(tree) {
  return { buildTree };

  function buildTree({ width, height }) {
    const base = tree.buildBase({ width });
    const baseHeight = base.split("\n").length;

    const trunk = tree.buildTrunk({ width });
    const trunkHeight = trunk.split("\n").length;

    const canopyHeight = height - baseHeight - trunkHeight;
    const canopy = buildCanopy({ width, height: canopyHeight });

    return `${canopy}
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
    const row = tree.buildCanopyRow({ index, width, height });
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
      .map((row) => ` ${row}`)
      .join("\n");
  }
}
