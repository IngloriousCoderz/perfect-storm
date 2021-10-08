module.exports = buildButton;

function buildButton(rows, columns, label) {
  const BORDERS = 2;
  const HALF_BUTTON = 2;
  const halfRowsWithoutBorders = (rows - BORDERS) / HALF_BUTTON;

  let result = "";
  result += buildFullRow(columns);
  result += buildEmptyRows(halfRowsWithoutBorders, columns);
  result += buildTextRow(columns, label);
  result += buildEmptyRows(halfRowsWithoutBorders, columns);
  result += buildFullRow(columns);
  return result;
}

function buildFullRow(columns) {
  let result = "";
  for (let i = 0; i < columns; i++) {
    result += "* ";
  }
  result += "\n";
  return result;
}

function buildEmptyRows(rows, columns) {
  let result = "";
  for (let i = 0; i < rows; i++) {
    result += buildEmptyRow(columns);
  }
  return result;
}

function buildEmptyRow(columns) {
  const BORDERS = 2;
  const columnsWithoutBorders = columns - BORDERS;

  let result = "";
  result += "* ";
  for (let j = 0; j < columnsWithoutBorders; j++) {
    result += "  ";
  }
  result += "* ";
  result += "\n";
  return result;
}

function buildTextRow(columns, label) {
  const BORDERS = 2;
  const HALF_BUTTON = 2;
  const COLUMNS_TO_CHARACTERS = 2;
  const length =
    ((columns - BORDERS) / HALF_BUTTON) * COLUMNS_TO_CHARACTERS -
    label.length / 2;

  let result = "";
  result += "* ";
  for (let i = 0; i < length; i++) {
    result += " ";
  }
  result += label;
  for (let i = 0; i < length; i++) {
    result += " ";
  }
  result += "* ";
  result += "\n";
  return result;
}

// console.log(visualizza(10, 10, "ciao"));
