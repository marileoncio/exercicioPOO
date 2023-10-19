"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDoCarrinho = [];
        // this.produtosDoCarrinho= [];
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(produto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter(item => item.nome !== produto.nome);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do Carrinho: ");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome +
                " R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto) {
        this.produtosEstoque = this.produtosEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosEstoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado ao estoque da loja";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto);
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
const produtoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const produtoLoja2 = new ProdutoLoja("Shot", 30.99);
const produtoLoja3 = new ProdutoLoja("Cropped", 29.99);
const minhaLoja = new Loja();
minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.removerProdutoDoCarrinho(produtoLoja2);
minhaLoja.removerProdutoDoEstoque(produtoLoja2);
minhaLoja.exibirProdutosDoCarrinho();
console.log("Total de carrinho de compras: R$ " +
    minhaLoja.carrinhoDeCompra.calcularValorTotal());
