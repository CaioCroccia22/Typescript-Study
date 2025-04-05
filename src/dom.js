"use strict";
const campo = document.getElementById('nome');
//Ja conhece os elementos do HTML
const form = document.getElementsByTagName('form');
const botaoEnviar = document.getElementById('.btn-enviar');
botaoEnviar === null || botaoEnviar === void 0 ? void 0 : botaoEnviar.addEventListener('onclick', function () {
    console.log('Apertei o botão');
});
console.log('ola' + 10);
