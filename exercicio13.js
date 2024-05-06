/*Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: 
1 x N = N 
2 x N = 2N 
3 x N = 3N 
*/

const prompt = require('prompt-sync')();

let contador;
let contPergunta = 0;

do {
    let n = parseInt(prompt("Digite um número:"));
    for (contador = 1; contador <= 10; contador++) {
        console.log(`${n} * ${contador} = `, n * contador);
    }
    contPergunta++
} while (contPergunta < 5);