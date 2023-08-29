class Funcionario{
    nome: string;
    cargo: string;
    salário: number;
    inss : number = 11;
    ir: number = 7.5;
    aumento: number;

    constructor(nome: string, cargo:string, salário: number, inss:number, ir:number, aumento:number){
        this.nome= nome;
        this.cargo= cargo;
        this.salário= salário;
        this.inss= inss;
        this.ir= ir;
        this.aumento= aumento
    
}
ApresentarFuncionario(){
    return "-Funcionário:" + this.nome + " -Cargo:" + this.cargo + " -Salário Bruto:" + this.salário;
}

ApresentarInss(inss: number, ir:number){
    let valorINSS = (this.salário/100) * inss;
    let valorIR = ((this.salário - valorINSS)/100 )* ir;
    let total = (valorINSS + valorIR)

    return " Salario Bruto: " + this.salário + "," + " Imposto do INSS de " + inss + "%, com valor de: R$" + valorINSS +
         ", " + "Imposto de Renda de " + ir + "%, com valor de: R$" + valorIR + ", " + "Total de Impostos: R$"+ (valorINSS + valorIR) + ", " + "Salário Líquido: R$" + (this.salário - total);
    }
   
    AumentoSalario(){
        let aumento = (this.salário/100) * this.aumento;
        return this.nome + " seu novo salário é de R$" + (this.salário + aumento)
    } 
    
}

let Funcionario1 = new Funcionario("Ana silva", "Analista de Vendas", 3000.00, 11, 7.5,10);
let funcionario2 = new Funcionario("Maria", "Pintora", 2750, 11, 7.5, 10);

console.log(Funcionario1.ApresentarFuncionario());
console.log(Funcionario1.ApresentarInss(11, 7.5));
console.log(Funcionario1.AumentoSalario());
console.log(funcionario2.ApresentarFuncionario())
console.log(funcionario2.AumentoSalario());

