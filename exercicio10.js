//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 

const prompt = require('prompt-sync')();

let num = parseInt(prompt ("Digite um número:"));
let contador = 1;

for(contador = 1; contador <= 10; contador++){
    console.log(`${num}`);
}