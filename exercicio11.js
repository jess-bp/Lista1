/* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. 
Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. 
O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO. 
*/
const prompt = require('prompt-sync')();

do {
    num = parseInt(prompt("Digite um número:"));
    if (num > 0 && num %2 === 0){
        console.log("O número digitado é par!");
    } else if (num %2 != 0 && num > 0){
        console.log("O número digitado é ímpar!");
    }
} while (num != 0 && num > 0);
console.clear();