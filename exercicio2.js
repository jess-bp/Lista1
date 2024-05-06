//procentagem eleitores

const prompt = require('prompt-sync')();

let totalEleitor = parseInt(prompt ("Insira o número total de eleitores do município: "));
let VotoBranco = parseInt(prompt ("Insira o número total de votos brancos: "));
let votoNulo = parseInt(prompt ("Insira o número total de votos nulos: "));
let votoValido = parseInt(prompt ("Insira o número total de votos válidos: "));

let percentualVB = ((VotoBranco * 100) / totalEleitor);
let percentualVN = ((votoNulo * 100) / totalEleitor);
let percentualVV = ((votoValido * 100) / totalEleitor);

console.log(percentualVB, "percentual de votos brancos.", percentualVN, "percentual de votos nulos.", percentualVV, "percentual de votos válidos.");