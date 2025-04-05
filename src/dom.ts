const campo = document.getElementById('nome');
//Ja conhece os elementos do HTML

const form = document.getElementsByTagName('form');
const botaoEnviar = document.getElementById('.btn-enviar');

botaoEnviar?.addEventListener('onclick', function(){
    console.log('Apertei o botão')
})

console.log('ola' + 10);