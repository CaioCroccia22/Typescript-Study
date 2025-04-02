"use strict";
//Function
function calculaArea(base, altura) {
    return base * altura;
}
//Arrow function
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return 'dez maior que 5';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
