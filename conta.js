"use strict";
class ContaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    ;
    consutarSaldo() {
        return "-Olá, seu saldo é de:R$" + this.saldo;
    }
    depositoSaldo(depositar) {
        let valorSaldo = (this.saldo + depositar);
        this.saldo = valorSaldo;
        return this.nome + " você fez um deposito de R$ " + depositar + ". Seu saldo é de R$ " + valorSaldo;
    }
    sacarSaldo(sacar) {
        let msgSaque;
        if (sacar > this.saldo) {
            msgSaque = " Saldo insuficiente";
        }
        else {
            let valorSaldo2 = (this.saldo - sacar);
            this.saldo = valorSaldo2;
            msgSaque = " Saque realizado com sucesso!" + this.nome + " Você fez um saque de R$ " + sacar + ". Seu saldo é de R$ " + this.saldo;
        }
        return msgSaque;
    }
}
let Conta1 = new ContaBancaria("João", 1000);
console.log(Conta1.consutarSaldo());
console.log(Conta1.depositoSaldo(500));
console.log(Conta1.sacarSaldo(200));
let Conta2 = new ContaBancaria("Maria", 1000);
console.log(Conta2.consutarSaldo());
console.log(Conta2.depositoSaldo(500));
console.log(Conta2.sacarSaldo(1500));
let Conta3 = new ContaBancaria("Julia", 1000);
console.log(Conta3.consutarSaldo());
console.log(Conta3.depositoSaldo(600));
console.log(Conta3.sacarSaldo(300));
