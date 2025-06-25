import Entrada from "../../io/entrada";
import Produto from "../../modelo/servico-produto/produto";
import Atualizar from "../padrao/atualizar";
import Deletar from "../padrao/deletar";


export default class DeletarProduto extends Deletar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        if (this.produtos.length > 0){
            this.produtos.forEach(produtos => {
                console.log(`Id: ${produtos.getId} Nome: ${produtos.getNome}`)
            })
        let encontraProduto = false
        while (encontraProduto === false) {
            const idProduto = this.entrada.receberNumero(`Digite o Id do produto que deseja deletar: `)
            const produtoIndex = this.produtos.findIndex(produto => produto.getId === idProduto)
            if (produtoIndex >= 0) {
                this.produtos.splice(produtoIndex, 1)
                console.log(`Produto Deletado:)`)
                encontraProduto = true
                break
            }
            else {
                console.log(`Produto não encontrado! Deseja tentar novamente? `)
                console.log(`1 - Sim`)
                console.log(`2 - Não`)
                let simOuNao = this.entrada.receberNumero(`Digite a opção desejada: `)
                    while(simOuNao <1 || simOuNao > 2){
                        simOuNao = this.entrada.receberNumero(`Digite a opção desejada: `)
                    }
                    if (simOuNao === 2) {
                        break;
                    }
            }
        }}
        else{
            console.log(`O sistema não possui produtos cadastrados! :(`)
        }

    }
}