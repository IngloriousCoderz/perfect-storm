module.exports = {
  buildTree,
  buildCanopy,
  buildCanopyRow,
  buildBase,
  buildTrunk,
};

function buildTree({ width, height }) {
  const base = buildBase({ width });
  const baseHeight = base.split("\n").length;

  const trunk = buildTrunk({ width });
  const trunkHeight = trunk.split("\n").length;

  const canopyHeight = height - baseHeight - trunkHeight;

  return `${buildCanopy({ height: canopyHeight })}
${base}
${trunk}`;
}

function buildCanopy({ height }) {
  const result = [];
  for (let i = 0; i < height; i++) {
    result.push(buildCanopyRow({ index: i, height }));
  }
  return result.join("\n");
}

function buildCanopyRow({ index, height }) {
  const lastRow = height - 1;
  const offset = lastRow - index;
  const spacesBetweenBorders = index * 2;

  let result = "";
  for (let i = 0; i < offset; i++) {
    result += " ";
  }
  result += "/";
  for (let i = 0; i < spacesBetweenBorders; i++) {
    result += " ";
  }
  result += "\\";
  return result;
}

function buildBase({ width }) {
  return "-".repeat(width);
}

function buildTrunk({ width }) {
  const trunk = "||";
  const offset = (width - trunk.length) / 2;

  let result = "";
  for (let i = 0; i < offset; i++) {
    result += " ";
  }
  result += trunk;
  return result;
}
