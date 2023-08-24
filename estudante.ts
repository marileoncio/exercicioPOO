class Estudante{
    nome: string;
    idade: number ;
    notas: number[];

    constructor(nome:string, idade:number, notas:number[]){
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    };
    Aluno(){
       return "Aluno:" + this.nome + " Idade: "+ this.idade + " Notas:" + this.notas; 
    }
    Media(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
        }
        const media = soma / this.notas.length;
       
        if(media< 7){
            return this.nome + ", sua média é "+ media + "  e você precisa estudar mais para melhorar seu desempenho. "
        }
        return "Parabéns, "+ this.nome+ " Sua média é "+ media+" e você está aprovado(a).";
       

    }  
    }

let estudante1= new Estudante("Brenda",17,[8, 7.5, 9.2, 6.8, 9.5]);
console.log(estudante1.Aluno());
console.log(estudante1.Media());
