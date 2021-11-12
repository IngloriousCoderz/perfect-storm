module.exports = { putAngelOnTopOfTree, buildAngel };

function putAngelOnTopOfTree(tree) {
  const [longestRow] = tree.split("\n").sort((a, b) => b.length - a.length);
  return `${buildAngel({ width: longestRow.length })}
${tree}`;
}

function buildAngel({ width }) {
  const angel = "qp";
  const offset = (width - angel.length) / 2;

  let result = "";
  for (let i = 0; i < offset; i++) {
    result += " ";
  }
  result += angel;
  return result;
}
