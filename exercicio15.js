//Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

const prompt = require('prompt-sync')();

let num;
let soma = 0;
let somaPeso = 0;

while (true) {
    num = parseFloat(prompt("Digite um número decimal ou 0 para encerrar: "));

    if (num === 0) {
    break;
  }

  peso = parseFloat(prompt("Digite o peso: "));
  soma += num * peso;
  somaPeso += peso;
}

if (somaPeso !== 0) {
  mediaPon = soma / somaPeso;
  console.log("A média é " + mediaPon);
} else {
  console.log("É preciso inserir um número. Tente novamente");
}