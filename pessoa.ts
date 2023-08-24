class Pessoa{
    nome:string;
    idade: number;
    comidas: string[];

        constructor(nome: string, idade: number, comidas: string[]){
            this.nome= nome;
            this.idade= idade;
            this.comidas= comidas;
        }

        cumprimentar(){
            let msgHabilitacao = " já possso tirar minha CNH";
            if(this.idade < 18)
            {
               msgHabilitacao = "e não posso tirar minha CNH"; 
            }
            return "Salve família, meu nome é "+ this.nome + 
            " tenho "+ this.idade + " anos " + msgHabilitacao + ".";
        }

        comidasFav(){
            console.log("Miha(s) comidas(s) favorita(s)");
            for(let i=0; i<this.comidas.length; i++){
                console.log(this.comidas[i]);
            }
        }
}

let pessoa1 = new Pessoa("Mari", 16, ["pizza", "churrasco", "bolo de chocolate"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFav());
