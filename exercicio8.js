//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente. 

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt ("Digite o primeiro número:"));
let num2 = parseInt(prompt ("Digite o segundo número:"));

if ((num1 != num2) && (num1 > num2)){
    console.log("A ordem crescente é ",num2,"e", num1);
} else {
    console.log("A ordem crescente é ",num1,"e", num2);
}