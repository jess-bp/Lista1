//Ler três valores e informar qual triangulo forma Triângulo isósceles, Triângulo escaleno, Triângulo equilátero

const prompt = require('prompt-sync')();

let A = parseInt(prompt ("Insira o comprimento do primeiro lado: "));
let B = parseInt(prompt ("Insira o comprimento do segundo lado: "));
let C = parseInt(prompt ("Insira o comprimento do terceiro lado: "));

if((A === B && A != C) || (B === C && B != A) || (A === C && C != B)){
    console.log ("É possível formar um triângulo isósceles!");
} else if (A != B && B != C && A != C){
    console.log("Não é possível formar um triângulo escaleno!");
} else if (A === B && B === C && A === C){
    console.log("Não é possível formar um triângulo equilátero!");
}else {
    console.log("Não é possível formar um triângulo!");
}