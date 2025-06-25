import Entrada from "../../io/entrada";
import Produto from "../../modelo/servico-produto/produto";
import Cadastro from "../padrao/cadastro";

export default class CadastrarProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja cadastrar: `)
        while(nomeProduto.trim() === ''){
            nomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja cadastrar: `)
        }
        let valorProduto = this.entrada.receberNumero(`Digite o valor do produto: R$ `)
        while( valorProduto < 0){
            valorProduto = this.entrada.receberNumero(`Digite o valor do produto: R$ `)
        }
        const produto = new Produto(nomeProduto, valorProduto);
        this.produtos.push(produto);
        console.log(`Produto Cadastrado! :)`);
    }
}
