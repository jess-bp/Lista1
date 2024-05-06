//Maçãs:menos do que uma dúzia R$ 0,30, pelo menos 12 e R$ 0,25. Ler número de maçãs compradas, calcule e escreva o valor total da compra. 

const prompt = require('prompt-sync')();

let quantMaca = parseInt(prompt ("Quantas maçãs você comprou? "));

if (quantMaca < 12) {
    console.log("Valor total da compra R$", quantMaca * 0.30);
} else {
    console.log("Valor total da compra R$", quantMaca * 0.25);
}