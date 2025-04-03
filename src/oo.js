"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    // Metodos
    dizOla() {
        return `Olá ${this.nome}`;
    }
}
class ContaBancario {
    constructor(numeroDaConta) {
        // Propriedade privada
        // private saldo: number = 0;
        // Classe filha acessa
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    getSaldo() {
        return this.saldo;
    }
    Depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancario {
    Depositar(valor) {
        // Modificador privado é apenas acessível na classe base, as herdeiras não podem acessar
        // Isso quando esta com o modificar 'private'
        // Quando esta com o modificador 'protector' consegue
        this.saldo;
    }
}
