"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoCompras {
    constructor() {
        this.listaDoCarrinho = [];
    }
    adcionarProduto(produtos) {
        this.listaDoCarrinho.push(produtos);
    }
    removerProduto(produtos) {
        this.listaDoCarrinho = this.listaDoCarrinho.filter(item => item.nome !== produtos.nome);
        return "Produto removido";
    }
    somaDosProdutos() {
        let soma = 0;
        for (const item of this.listaDoCarrinho) {
            soma = soma + item.preco;
        }
        return soma.toFixed(2);
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinho = new CarrinhoCompras();
    }
    adcionarEstoque(produtos) {
        this.estoque.push(produtos);
    }
    removerProdutosEstoque(produtos) {
        this.estoque = this.estoque.filter(item => item.nome !== produtos.nome);
        return "Produto removido do estoque da loja";
    }
    adcionarProdutoNoCarrinho(produtos) {
        const produtoEncontrado = this.estoque.find(item => item.nome == produtos.nome);
        if (produtoEncontrado) {
            this.carrinho.adcionarProduto(produtos);
            return "Produto adcionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerProdutos(produtos) {
        return this.carrinho.removerProduto(produtos);
    }
}
const ProdutoLoja1 = new ProdutoLoja("Base da Virgínia", 200);
const ProdutoLoja2 = new ProdutoLoja("Batom", 50);
const ProdutoLoja3 = new ProdutoLoja("Gloss", 60);
const loja = new Loja();
console.log(loja.adcionarEstoque(ProdutoLoja1));
console.log(loja.adcionarEstoque(ProdutoLoja2));
console.log(loja.adcionarEstoque(ProdutoLoja3));
console.log(loja.adcionarProdutoNoCarrinho);
console.log(loja.removerProdutos(ProdutoLoja1));
