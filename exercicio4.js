// calcular média de 2 notas, nota minima 6.0, escrever mensagem: ‘PARABÉNS! Você foi aprovado’

const prompt = require('prompt-sync')();

let nota1 = parseInt(prompt ("Insira a primeira nota: "));
let nota2 = parseInt(prompt ("Insira a segunda nota: "));
let notaMinima = 6.0;
let media = ((nota1 + nota2) / 2);

if (media >= notaMinima) {
    console.log("PARABÉNS! Você foi aprovado!");
}