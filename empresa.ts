abstract class Trabalhador{

    private nome: string;
    protected salario: number;


    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
    abstract salarioMensal(): number;
}

class Desenvolvedor extends Trabalhador {

    constructor() { super("Desenvolvedor", 2500);
       
    }

    salarioMensal(): number {
        return this.salario;
    }

}

class Gerente extends Trabalhador {
    constructor() {
        super("Gerente", 3000)
    }

    salarioMensal(): number {
        return this.salario + ((this.salario/10) *100);
    }

}
const desenvolvedor = new Desenvolvedor();
console.log("O salário do desenvolvedor é de :"+ desenvolvedor.salarioMensal());

const gerente = new Gerente();
console.log("O salário do gerente é de :"+ gerente.salarioMensal());
