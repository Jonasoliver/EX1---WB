import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente/cliente";
import Produto from "../../modelo/servico-produto/produto";
import Listagem from "../padrao/listagem";

export default class ListagemProdutos extends Listagem {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super();
        this.clientes = clientes;
        this.produtos = produtos
        this.entrada = new Entrada();
    }
    public listar(): void {
        console.log(`Escolha uma opção para listagem de produto:`);
        console.log(`1 - Produtos mais consumidos por gênero`);
        console.log(`2 - 10 Clientes que mais consumiram produtos (quantidade)`);
        console.log(`3 - Produtos mais consumidos`);
        console.log(`4 - 5 Clientes que mais consumiram produtos (valor)`);
        console.log(`5 - Listar Todos os Produtos Cadastrados `)
        console.log(`6 - Voltar`);
        let opcaoEscolhida = this.entrada.receberNumero(`Digite a opção desejada: `)
        while (opcaoEscolhida < 1 || opcaoEscolhida > 6){
            opcaoEscolhida = this.entrada.receberNumero(
                `Digite a opção desejada: `
            )
        }
        switch (opcaoEscolhida) {
            case 1:
                this.listarProdutosGenero();
                break;
            case 2:
                this.listarTop10();
                break;
            case 3:
                this.produtoMaisConsumidos();
                break;
            case 4:
                this.listaTop5();
                break;
            case 5:
                this.listarTodosProdutos()
                break;
            case 6:
                break
        }
    }
    private listarProdutosGenero(): void {
        console.log(`Escolha o gênero que deseja listar: `);
        console.log(`1 - Feminino`);
        console.log(`2 - Masculino`);
        console.log(`3 - Não Binário`);
        console.log(`4 - Não declarado`);
        let opcaoGenero = this.entrada.receberNumero(`Digite o número do gênero desejado: `);
        let genero: string = ''
        switch (opcaoGenero) {
            case 1:
                genero = "Feminino";
                break;
            case 2:
                genero = "Masculino";
                break;
            case 3:
                genero = "Não Binário";
                break;
            case 4:
                genero = "Não Declarado";
                break;
            default:
                console.log(`Opção inválida!`);
                return;
        }
        // filtra os clientes que tem o genero esclhido
        const clienteGeneroEscolhido = this.clientes.filter((cliente) => cliente.getGenero.getValor === genero)

        // Array para armazenar todos os produtos consumidos pelos clientes do gênero selecionado
        const produtosConsumidos: Produto[] = [];

        // Loop através de cada cliente e adição de seus produtos consumidos ao array
        for (const cliente of clienteGeneroEscolhido) {
            produtosConsumidos.push(...cliente.getProdutosConsumidos);
        }
        if (produtosConsumidos.length > 0) {
            const contadorProdutos = new Map<number, number>()

            for (const produto of produtosConsumidos) {
                const produtoId = produto.getId
                contadorProdutos.set(produtoId, (contadorProdutos.get(produtoId) || 0)+ 1)
            }
        
            const produtosOrdenados = Array.from(contadorProdutos.entries()).sort((a, b) => b[1] - a[1])

            // Exibe a listagem dos produtos mais consumidos por esse gênero
            console.log(`Listagem dos produtos mais consumidos por ${genero}:`);
            produtosOrdenados.slice(0, 10).forEach((produtoAtual, index) => {
                const [produtoId, quantidade] = produtoAtual;
                const produto = produtosConsumidos.find(produto => produto.getId === produtoId);
                
                if (produto) {
                    console.log(`${index + 1}. Nome: ${produto.getNome}, Quantidade de Vendas: ${quantidade}`);
                }
            });
        } else {
            console.log(`Não foram consumidos produtos pelo gênero ${genero}.`);
        }
    }
    private listarTop10(): void {
        const contadorProdutos = new Map<Cliente, number>();

        for (const cliente of this.clientes) {
            const produtosConsumidos = cliente.getProdutosConsumidos;
            contadorProdutos.set(cliente, produtosConsumidos.length);
        }

        const clientesOrdenados = Array.from(contadorProdutos.entries()).sort((a, b) => b[1] - a[1]);

        console.log("Listagem dos 10 clientes que mais consumiram produtos (quantidade):");

        clientesOrdenados.slice(0, 10).forEach((clienteAtual, index) => {
            const [cliente, quantidade] = clienteAtual;
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Quantidade de Produtos Consumidos: ${quantidade}`);
        });
    }
    private produtoMaisConsumidos(): void {
        const contadorProdutos = new Map<Produto, number>();

        // Itera sobre todos os clientes e conta a quantidade de vezes que cada produto é consumido
        for (const cliente of this.clientes) {
            const produtosConsumidos = cliente.getProdutosConsumidos;
            for (const produto of produtosConsumidos) {
                contadorProdutos.set(produto, (contadorProdutos.get(produto) || 0) + 1);
            }
        }

        // Ordena os produtos pelo número de vezes que foram consumidos (em ordem decrescente)
        const produtosOrdenados = Array.from(contadorProdutos.entries()).sort((a, b) => b[1] - a[1]);

        // Exibe a listagem dos produtos mais consumidos
        console.log("Listagem dos produtos mais consumidos:");

        produtosOrdenados.slice(0, 10).forEach((produtoAtual, index) => {
            const [produto, quantidade] = produtoAtual;
            console.log(`${index + 1}. Produto: ${produto.getNome}, Quantidade de Vendas: ${quantidade}`);
        });
    }
    private listaTop5(): void {
        const valoresClientes = new Map<Cliente, number>()
        for (const cliente of this.clientes) {
            const produtosConsumidos = cliente.getProdutosConsumidos
            let valorTotal = 0
            for (const produto of produtosConsumidos) {
                valorTotal += produto.getValorProduto
            }
            valoresClientes.set(cliente, valorTotal)
        }

        const clientesOrdenados = Array.from(valoresClientes.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos 5 clientes que mais consumiram produtos (em valor):`);
        // Exibe os 5 primeiros clientes da lista ordenada
        clientesOrdenados.slice(0, 5).forEach((clienteAtual, index) => {
            const [cliente, valorTotal] = clienteAtual
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Valor Total: R$${valorTotal.toFixed(2)}`);
        });
    }
    private listarTodosProdutos():void{
        console.log(`-----------------------------------------------`)
        console.log(`          Todos os Produtos Cadastrados`)
        console.log(`-----------------------------------------------`)
        this.produtos.forEach(produto => {
            console.log(`Id: ${produto.getId} Nome: ${produto.getNome} `)
            console.log(`Valor: $${produto.getValorProduto.toFixed(2)}`)
        console.log(`-----------------------------------------------`)
        })
    }
}
