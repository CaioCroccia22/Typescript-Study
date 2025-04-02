//Function
function calculaArea(base: number, altura: number){
    return base * altura
}

//Arrow function
const calculaArea2 = (base: number, altura: number): number => base * altura


function somar(...numeros: number[]){
    // numeros.reduce()
    console.log(numeros)
}


function teste(): string | number{
    if (10 > 5){
        return 'dez maior que 5'
    } else{
        return 5
    }
}

const resultadoDeTeste = teste()