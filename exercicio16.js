//Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let quantidadePrimo = 1
let contApartir = 100

while(quantidadePrimo <= 50) {
    let primo = true
    let contador = 2

    while(contador <= (contApartir / 2) + 1) {
        if(contApartir % contador == 0) {
            primo = false
        }
        contador++;
    }

    if(primo === true) {
        console.log(contApartir);
        quantidadePrimo++;
    }
    contApartir++;
}