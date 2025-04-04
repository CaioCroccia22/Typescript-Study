"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    Depositar(valor) {
        this.saldo += valor;
    }
}
//Vantagem da interface é usarmos em quantas classes quisermos, e quantas quisermos
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - (this.taxaTransferencia);
        return true;
    }
    ;
    setCNPJ(cnpj) {
        return `O cnpj é ${cnpj}`;
    }
}
const ContaDoCaio = new ContaCorrente(12123);
ContaDoCaio.transferir(1212212, ContaDoCaio);
ContaDoCaio.setCNPJ(212132323);
