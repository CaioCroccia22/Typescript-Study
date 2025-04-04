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
    static retornaNumeroDoBanco() {
        return 125;
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
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(20089);
ContaBancario.retornaNumeroDoBanco;
//Propriedade protegida -> Acessivel dentro da propria classe e dentro das classe filhas
// Publico -> Acessivel em todos os niveis
//Privado -> Acessivel so dentro da propria classe
//O metodos também podem ter modificadores
//Estatico -> Pertence a classe a não a instância, não precisa do new
