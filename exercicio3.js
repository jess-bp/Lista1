//ler 4 nº, 1º soma 25, 2º triplica valor do 2º, 3º acrescenta 12%, 4º armazena e soma todos os valores originais

const prompt = require('prompt-sync')();

let porcento = 0.12;
let num1 = parseInt(prompt ("Insira o primeiro número: "));
let num2 = parseInt(prompt ("Insira o segundo número: "));
let num3 = parseInt(prompt ("Insira o terceiro número: "));
let num4 = parseInt(prompt ("Insira o quarto número: "));
let soma = (num1 + num2 + num3 + num4);

console.log(num1 + 25);
console.log(num2 * 3);
console.log((num3 * porcento) + num3);
console.log(soma);