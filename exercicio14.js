//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite um número decimal: "));
let soma = 0;
let contador = 0;
let media = 0;

while(num != 0) {
    soma += num;
    contador++;
    media = soma / contador;

    num = parseFloat(prompt("Digite um número decimal: "));
    if(num !== num || num == undefined) {
        console.log("Digite somente número decimal!");
        break;
    }
}
console.log("A média dos " + contador + " números digitados é " + media);