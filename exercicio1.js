//de ºC para ºF 
const prompt = require('prompt-sync')();

let num = 1.8;
let grausC = parseInt(prompt("Digite a temperatura em ºC:"));
let grausF = ((grausC * num) + 32);

console.log("A temperatura é", grausF, "ºF");