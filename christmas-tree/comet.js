module.exports = { putCometOnTopOfTree, buildComet };

function putCometOnTopOfTree(tree, width) {
  return `${buildComet({ width })}
${tree}`;
}

function buildComet({ width }) {
  const comet = "*~";
  const offset = (width - comet.length) / 2;

  let result = "";
  for (let i = 0; i < offset; i++) {
    result += " ";
  }
  result += comet;
  return result;
}
