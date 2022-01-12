const operations = {
  '+': (val1, val2) => val1 + val2,
  '-': (val1, val2) => val1 - val2,
  '*': (val1, val2) => val1 * val2,
  '/': (val1, val2) => val1 / val2,
  '//': (val1, val2) => Math.floor(val1 / val2),
  '%': (val1, val2) => val1 % val2,
  '**': (val1, val2) => val1 ** val2
}

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
  \u001b[0m`;

const stringCalcDesliga = `\u001b[31mCalculadora DESLIGADA.\u001b[0m`;

exports.operations = operations;
exports.stringCalcLiga = stringCalcLiga;
exports.stringCalcDesliga = stringCalcDesliga;
