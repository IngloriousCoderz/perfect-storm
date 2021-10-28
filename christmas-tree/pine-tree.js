module.exports = {
  buildTree,
  buildCanopy,
  buildCanopyRow,
  buildBase,
  buildTrunk,
};

/**
 *    /\
 *   /  \
 *  /    \
 * /      \
 * --------
 *    ||
 */

function buildTree({ width, height }) {
  const base = buildBase({ width });
  const baseHeight = base.split("\n").length;

  const trunk = buildTrunk({ width });
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

function buildCanopyRow({ index, height }) {
  const lastRow = height - 1;

  let result = "";
  for (let i = 0; i < lastRow - index; i++) {
    result += " ";
  }
  result += "/";
  for (let i = 0; i < index * 2; i++) {
    result += " ";
  }
  result += "\\";
  return result;
}

function buildBase({ width }) {
  let result = "";
  for (let i = 0; i < width; i++) {
    result += "-";
  }
  return result;
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
