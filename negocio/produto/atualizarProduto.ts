import Entrada from "../../io/entrada";
import Produto from "../../modelo/servico-produto/produto";
import Atualizar from "../padrao/atualizar";

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public atualizar(): void {
        console.log(`Produtos cadastrados no sistema: `)
        if (this.produtos.length > 0){
            this.produtos.forEach(produtos => {
                console.log(`Id: ${produtos.getId} Nome: ${produtos.getNome}`)
            })
            let encontraProduto = false;
            while (encontraProduto === false) {
                const idProduto = this.entrada.receberNumero(`Digite o id do produto que deseja atualizar: `);
                const produto = this.produtos.find((produto) => produto.getId === idProduto);
                if (produto) {
                    let novoNomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja cadastrar: `)
                    while(novoNomeProduto.trim() ===  ''){
                        novoNomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja cadastrar: `)
                    }
                    const novoValorProduto = this.entrada.receberNumero(`Digite o valor do produto: R$`);
                    produto.setNome(novoNomeProduto);
                    produto.setValorProduto(novoValorProduto);
                    console.log(`Produto Atualizado:)`);
                    encontraProduto = true;
                    break;
                } else {
                    console.log(`Produto não encontrado! Deseja tentar novamente? `);
                    console.log(`1 - Sim`);
                    console.log(`2 - Não`);
                    let simOuNao = this.entrada.receberNumero(`Digite a opção desejada: `)
                    while(simOuNao <1 || simOuNao > 2){
                        simOuNao = this.entrada.receberNumero(`Digite a opção desejada: `)
                    }
                    if (simOuNao === 2) {
                        break;
                    }
                }
            }

        
        }else{
            console.log(`O sistema não possui produtos cadastrados! :(`)
        }
    }
}
