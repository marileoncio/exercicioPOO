"use strict";
class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    apresentar() {
        return "-Produto: " + this.nome + ", Valor:R$ " + this.valor;
    }
    desconto(desconto) {
        let valorDesconto = (this.valor / 100) * desconto;
        return "Desconto de " + desconto + "% " +
            "aplicado. Novo Preço: R$" + (this.valor - valorDesconto);
    }
}
let produto1 = new Produto("Livro", 40.00);
console.log(produto1.apresentar());
console.log(produto1.desconto(20));
let produto2 = new Produto("Prateleira", 130);
console.log(produto2.apresentar());
console.log(produto2.desconto(10));
let produto3 = new Produto("Marca Página Personalizado", 20);
console.log(produto3.apresentar());
console.log(produto3.desconto(15));
