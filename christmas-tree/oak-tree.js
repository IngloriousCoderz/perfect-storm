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
  const firstRow = 0;
  const lastRow = height - 1;

  if (index === firstRow) {
    return buildTopCanopyRow({ width });
  } else if (index === lastRow) {
    return buildBottomCanopyRow({ width });
  } else {
    return buildMiddleCanopyRow({ width });
  }
}

function buildTopCanopyRow({ width }) {
  const canopyTopLeft = "/";
  const canopyTop = "-";
  const canopyTopRight = "\\";
  const widthWithoutBorders =
    width - canopyTopLeft.length - canopyTopRight.length;

  let result = canopyTopLeft;
  for (let j = 0; j < widthWithoutBorders; j++) {
    result += canopyTop;
  }
  result += canopyTopRight;
  return result;
}

function buildMiddleCanopyRow({ width }) {
  const canopyMiddle = "|";
  const widthWithoutBorders = width - canopyMiddle.length - canopyMiddle.length;

  let result = canopyMiddle;
  for (let j = 0; j < widthWithoutBorders; j++) {
    result += " ";
  }
  result += canopyMiddle;
  return result;
}

function buildBottomCanopyRow({ width }) {
  const canopyBottomLeft = "\\";
  const canopyBottom = "-";
  const canopyBottomRight = "/";
  const widthWithoutBorders =
    width - canopyBottomLeft.length - canopyBottomRight.length;

  let result = canopyBottomLeft;
  for (let j = 0; j < widthWithoutBorders; j++) {
    result += canopyBottom;
  }
  result += canopyBottomRight;
  return result;
}

function buildBase({ width }) {
  const base = "\\\\//";
  const offset = (width - base.length) / 2;
  let result = "";
  for (let j = 0; j < offset; j++) {
    result += " ";
  }
  result += base;
  return result;
}

function buildTrunk({ width }) {
  const height = 2;

  const result = [];
  for (let i = 0; i < height; i++) {
    result.push(buildTrunkRow(width));
  }
  return result.join("\n");
}

function buildTrunkRow(width) {
  const trunk = "||";
  const offset = (width - trunk.length) / 2;
  let result = "";
  for (let j = 0; j < offset; j++) {
    result += " ";
  }
  result += trunk;
  return result;
}
