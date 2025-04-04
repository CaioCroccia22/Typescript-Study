class Conta{
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }

}

class ContaSalario extends Conta{
    Depositar(valor: number){
        this.saldo += valor;
    }
}
//Na interface não podemos usar o código pronto temos apenas que informar que quem irá utilizar ela irá transferir
interface ITransacional{
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface ICNPJ{
    setCNPJ: (cnpj: number) => string;
}

//Vantagem da interface é usarmos em quantas classes quisermos, e quantas quisermos
class ContaCorrente extends Conta implements ITransacional, ICNPJ{
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor - (this.taxaTransferencia);
        return true
    };
    taxaTransferencia: number = 0;
    
    setCNPJ(cnpj: number) {
        return `O cnpj é ${cnpj}`
    }

}


const ContaDoCaio = new ContaCorrente(12123)
ContaDoCaio.transferir(1212212, ContaDoCaio)
ContaDoCaio.setCNPJ(212132323)