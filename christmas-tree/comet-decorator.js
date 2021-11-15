module.exports = { createDecorator };

function createDecorator(decorated) {
  return {
    buildTree,
    buildCanopy: decorated.buildCanopy,
    buildBase: decorated.buildBase,
    buildTrunk: decorated.buildTrunk,
  };

  function buildTree({ width, height }) {
    const tree = decorated.buildTree({ width, height });
    const [longestRow] = tree.split("\n").sort((a, b) => b.length - a.length);

    const result = [];
    result.push(createComet({ width: longestRow.length }));
    result.push(tree);
    return result.join("\n");
  }

  function createComet({ width }) {
    const angel = "*~";
    const offset = (width - angel.length) / 2;

    let result = "";
    for (let i = 0; i < offset; i++) {
      result += " ";
    }
    result += angel;
    return result;
  }
}
