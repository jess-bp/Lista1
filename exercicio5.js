//Acrescente ao exercício 04 a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0 

const prompt = require('prompt-sync')();

let nota1 = parseInt(prompt ("Insira a primeira nota: "));
let nota2 = parseInt(prompt ("Insira a segunda nota: "));
let notaMinima = 6.0;
let media = ((nota1 + nota2) / 2);

if (media >= notaMinima) {
    console.log("PARABÉNS! Você foi aprovado!");
}else {
    console.log("Você foi REPROVADO! Estude mais!");
}