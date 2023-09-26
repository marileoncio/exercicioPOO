"use strict";
class ContaBancariaa {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancariaa {
    constructor(limiteChequeEspecial) {
        super("Conta corrente", 2000, "Maria");
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        console.log(this.saldo = this.saldo + valor);
    }
    sacar(valor) {
        let msgSaque = " Saque realizado com sucesso!";
        if (valor > this.limiteChequeEspecial) {
            msgSaque = " Saldo insuficiente";
        }
        else {
            this.saldo = this.limiteChequeEspecial - valor;
            msgSaque = " Voce fez um saque de " + valor + ". Seu saldo é de R$ " + this.saldo;
        }
        console.log(msgSaque);
    }
    consultarSaldo() {
        return this.saldo;
    }
}
class ContaPoupanca extends ContaBancariaa {
    constructor() {
        super("Conta corrente", 2000, "Maria");
    }
    depositar(valor) {
        console.log(this.saldo = this.saldo + valor);
    }
    sacar(valor) {
        let msgSaque = " Saque realizado com sucesso!";
        if (valor > this.saldo) {
            msgSaque = " Saldo insuficiente";
        }
        else {
            this.saldo = this.saldo - valor;
            msgSaque = " Voce fez um saque de " + valor + ". Seu saldo é de R$ " + this.saldo;
        }
        console.log(msgSaque);
    }
    consultarSaldo() {
        return this.saldo;
    }
    calcularRendimentoAnual(taxa) {
        return this.saldo + ((this.saldo / 100) * 10);
    }
}
