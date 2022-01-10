const operations = (val1, val2, operation) => {
  switch (operation) {
    case "soma":
      return val1 + val2;
    case "sub":
      return val1 - val2;
    case "div":
      return val1 / val2;
    case "mult":
      return val1 * val2;
    case "power":
      return val1 ** val2;
    default:
      return "Operação inválida";
  }
};

exports.operations = operations;
