"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando Preparo";
    StatusPedido["SaiuPraEntrega"] = "Em Preparo";
    StatusPedido["Entregue"] = "Saiu pra entrega";
    StatusPedido["ClienteAusente"] = "Cliente n\u00E3o localizado";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adcionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adcionado com sucesso!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        console.log("Produtos do pedido");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produto: " + this.produtos[index].nome + "R$" +
                this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("Base-Mari Maria ", 50);
const outroProdutoPedido = new ProdutoPedido("Base-Boca Rosa ", 60);
const novoPedido = new Pedido();
novoPedido.adcionarProduto(produtoPedido);
novoPedido.adcionarProduto(outroProdutoPedido);
console.log("Status atual do pedido " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.ClienteAusente);
console.log("Status atual do pedido " + novoPedido.exibirStatus());
novoPedido.exibirProdutosDoPedido();
