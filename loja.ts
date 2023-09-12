class ProdutoLoja{
    nome:string;
    preco:number;

    constructor(nome:string, preco:number){
        this.nome=nome;
        this.preco=preco;
    }
}
class CarrinhoCompras{
     
    listaDoCarrinho: ProdutoLoja[]=[];

    constructor(){}

    adcionarProduto(produtos: ProdutoLoja){
      this.listaDoCarrinho.push(produtos);
    }
    removerProduto(produtos: ProdutoLoja){
        this.listaDoCarrinho = this.listaDoCarrinho.filter(item => item.nome !== produtos.nome);
        return "Produto removido";
    }

    somaDosProdutos(){
        let soma = 0;
        for (const item of this.listaDoCarrinho){
           soma = soma + item.preco;
        }
        return soma.toFixed(2);
        }

    }
class Loja{
     estoque: ProdutoLoja[]=[];
     carrinho = new CarrinhoCompras();

     adcionarEstoque(produtos: ProdutoLoja){
        this.estoque.push(produtos);
      }
      removerProdutosEstoque(produtos: ProdutoLoja){
        this.estoque = this.estoque.filter(item => item.nome !== produtos.nome );
        return "Produto removido do estoque da loja";
      }

        adcionarProdutoNoCarrinho(produtos: ProdutoLoja){
        const produtoEncontrado = this.estoque.find(
            item => item.nome == produtos.nome
        );
        if (produtoEncontrado){
            this.carrinho.adcionarProduto(produtos);
          return "Produto adcionado ao carrinho de compras"
        }
        else {
            return "Produto não encontrado no estoque";
        }
        }
        removerProdutos(produtos:ProdutoLoja){
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





