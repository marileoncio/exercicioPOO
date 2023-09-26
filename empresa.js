"use strict";
class Trabalhador {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Desenvolvedor extends Trabalhador {
    constructor() {
        super("Desenvolvedor", 2500);
    }
    salarioMensal() {
        return this.salario;
    }
}
class Gerente extends Trabalhador {
    constructor() {
        super("Gerente", 3000);
    }
    salarioMensal() {
        return this.salario + ((this.salario / 10) * 100);
    }
}
const desenvolvedor = new Desenvolvedor();
console.log("O salário do desenvolvedor é de :" + desenvolvedor.salarioMensal());
const gerente = new Gerente();
console.log("O salário do gerente é de :" + gerente.salarioMensal());
