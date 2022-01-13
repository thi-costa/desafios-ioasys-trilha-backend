const calc = require("./calculator");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ligarCalculadora = async () => {
  let calcLigada = true;
  console.log(calc.stringCalcLiga);

  while (calcLigada) {
    let valor1, valor2, operation;
    await new Promise((resolve) =>
      rl.question("Insira o 1º valor: ", (valorLido) =>
        resolve((valor1 = valorLido))
      )
    );
    if (!valor1 | isNaN(valor1)) {// Reinicia calculadora se valor1 for inválido
      console.log("Valor1 inválido");
      ligarCalculadora();
    }
    valor1 = Number(valor1);
    await new Promise((resolve) =>
      rl.question("Insira a operação desejada: ", (valorLido) =>
        resolve((operation = valorLido))
      )
    );
    operation = operation.toLowerCase();
    if(!calc.singleOperators.includes(operation)){// verifica se a operação exige 2 valores
      await new Promise((resolve) =>
        rl.question("Insira o 2º valor: ", (valorLido) =>
          resolve((valor2 = valorLido))
        )
      );
  
      if (!valor2 | isNaN(valor2)) {// Reinicia calculadora se valor2 for inválido
        console.log("Valor2 inválido");
        ligarCalculadora();
      }
      valor2 = Number(valor2);
      console.log(calc.operations[operation](valor1, valor2));
    } else {
      console.log(calc.operations[operation](valor1));
    }   
    
    await new Promise((resolve) =>
      rl.question("Deseja fazer mais cálculos? ", (valorLido) => {
        valorLido = valorLido.toLowerCase();
        if ((valorLido === "n") | (valorLido === "no") | (valorLido === "não")) {
          console.log(calc.stringCalcDesliga);
          process.exit();
        } else {
          ligarCalculadora();
        }
      })
    );
  }
};

ligarCalculadora();
