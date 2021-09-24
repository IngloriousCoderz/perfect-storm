module.exports = visualizza;

function visualizza(x, y, ciao) {
  let result = "";

  for (var i = 0; i < x; i++) {
    result += "* ";
  }
  result += "\n";
  for (var j = 0; j < (y - 2) / 2; j++) {
    result += "* ";
    for (var k = 0; k < (x - 2) * 2; k++) {
      result += " ";
    }
    result += "* ";
    result += "\n";
  }
  result += "* ";
  for (var l = 0; l < x - 2 - 2; l++) {
    result += " ";
  }
  result += ciao;
  for (var l = 0; l < x - 2 - 2; l++) {
    result += " ";
  }
  result += "* ";
  result += "\n";
  for (var j = 0; j < (y - 2) / 2; j++) {
    result += "* ";
    for (var k = 0; k < (x - 2) * 2; k++) {
      result += " ";
    }
    result += "* ";
    result += "\n";
  }
  for (var i = 0; i < x; i++) {
    result += "* ";
  }
  result += "\n";

  return result;
}

// visualizza(10, 10, "ciao");
