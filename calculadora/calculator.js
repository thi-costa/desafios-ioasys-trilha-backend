const operations = {
  "+": (val1, val2) => val1 + val2,
  "-": (val1, val2) => val1 - val2,
  "*": (val1, val2) => val1 * val2,
  "/": (val1, val2) => val1 / val2,
  "//": (val1, val2) => Math.floor(val1 / val2),
  "%": (val1, val2) => val1 % val2,
  "**": (val1, val2) => val1 ** val2,
  sin: (val1) => Math.sin(val1),
  cos: (val1) => Math.cos(val1),
  tan: (val1) => Math.tan(val1),
};
const singleOperators = ["sin", "cos", "tan"];

const stringCalcLiga = `\u001b[36mCalculadora LIGADA!\u001b[0m
  \u001b[32m
    Suporta operações de:\n
    soma: "+"
    subtração: "-"
    multiplicação: "*"
    divisão: "/"
    divisão inteira: "//"
    resto da divisão: "%"
    potenciação: "**"
    seno: "sin", calcula o seno (em radianos)
    cosseno: "cos", calcula o cosseno (em radianos)
    tangente: "tan", calcula o tangente (em radianos)
  \u001b[0m`;

const stringCalcDesliga = `\u001b[31mCalculadora DESLIGADA.\u001b[0m`;

module.exports = {
  operations,
  stringCalcLiga,
  stringCalcDesliga,
  singleOperators,
};
