"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "AU, eu sou " + this.nome + " um " + this.raca + " de "
            + this.idade + " anos ";
    }
    apresentarPara(humano) {
        return "Oi " + humano + " eu sou " + this.nome + " um " + this.raca + " de "
            + this.idade + " anos ";
    }
}
let rex = new Cachorro("Rex", "Golden", 1);
let luna = new Cachorro("Luna", "Poodle", 6);
console.log(rex.nome);
console.log(luna.nome);
console.log(rex.apresentar());
console.log(luna.apresentar());
console.log(rex.apresentarPara("mari"));
console.log(luna.apresentarPara("mari"));
