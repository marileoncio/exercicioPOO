"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "Mari";
        this.ultimoNome = " Timóteo";
    }
    getNomeCompleto() {
        return this.primeiroNome + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const treinadorPessoa1 = new class {
    constructor() {
        this.rotina = [];
    }
    adcionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempoTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;
    }
};
treinadorPessoa1.adcionarExercicios("corrida", 30);
treinadorPessoa1.adcionarExercicios("flexões", 15);
treinadorPessoa1.adcionarExercicios("agachamentos", 20);
console.log("Tempo total necessário para a rotina: " +
    treinadorPessoa1.calcularTempoTotal() + " em minutos");
