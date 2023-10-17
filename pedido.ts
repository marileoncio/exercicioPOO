enum StatusPedido{
    AguardandoPreparo = "Aguardando Preparo",
    SaiuPraEntrega = "Em Preparo",
    Entregue = "Saiu pra entrega",
    ClienteAusente = "Cliente não localizado"
}

class ProdutoPedido{
    nome: string;
    valor: number;
    constructor(nome:string, valor:number){
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido{
    private produtos: ProdutoPedido[]
    private status: StatusPedido;
    constructor(){
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adcionarProduto(produto:ProdutoPedido){
        this.produtos.push(produto);
        return "Produto adcionado com sucesso!"
    }
    atualizarStatus(status: StatusPedido){
        this.status = status;
    }
    exibirStatus(){
        return this.status
    }
    exibirProdutosDoPedido(){
        console.log("Produtos do pedido")
        for(let index = 0; index < this.produtos.length; index++){
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