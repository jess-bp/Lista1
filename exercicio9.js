// 1 - sul, 2 - norte, 3 - leste, 4 - oeste, 5 ou 6 - nordeste, 7, 8 ou 9 - sudeste, 10 até 20 - centro-oeste, 25 até 50 - nordeste, fora dos intervalos - produto importado

const prompt = require('prompt-sync')();

let codOrigem = parseInt(prompt ("Qual o número do código de origem do produto? "));

if(codOrigem === 1){
    console.log("A região é Sul.");
} else if(codOrigem === 2){
    console.log("A região é Norte.");
} else if(codOrigem === 3){
    console.log("A região é Leste.");
} else if(codOrigem === 4){
    console.log("A região é Oeste.");
} else if((codOrigem === 5) || (codOrigem === 6) || (codOrigem >= 25 && codOrigem <= 50)){
    console.log("A região é Nordeste.");
} else if((codOrigem === 7) || (codOrigem === 8) || (codOrigem === 9)){
    console.log("A região é Sudeste.");
} else if((codOrigem === 10) || (codOrigem <= 20 )){
    console.log("A região é Centro-Oeste.");
} else {
    console.log("Produto importado!");
}