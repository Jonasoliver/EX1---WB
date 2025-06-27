import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente/cliente";
import Servico from "../../modelo/servico-produto/servico";
import Listagem from "../padrao/listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, servicos : Array<Servico>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`Escolha uma opção para listagem de serviço:`);
        console.log(`1 - Serviços mais consumidos por gênero`);
        console.log(`2 - 10 Clientes que mais consumiram serviços (quantidade)`);
        console.log(`3 - Serviços mais consumidos`);
        console.log(`4 - 5 Clientes que mais consumiram serviços (valor)`);
        console.log(`5 - Listar Todos os Serviços Cadastrados`);
        console.log(`6 - 10 Clientes por gênero`);
        console.log(`7 - 10 Clientes que menos consumiram serviços`);
        console.log(`8 - Voltar`);
        let opcaoEscolhida = this.entrada.receberNumero(
            `Digite a opção desejada: `
        )
        while (opcaoEscolhida < 1 || opcaoEscolhida > 8){
            opcaoEscolhida = this.entrada.receberNumero(
                `Digite a opção desejada: `
            )
        }
        switch (opcaoEscolhida) {
            case 1:
                this.listarServicoGenero()
                break;
            case 2:
                this.listarTop10MaisConsumiram()
                break;
            case 3:
                this.listarMaisConsumidos()
                break;
            case 4:
                this.listarTop5Valor()
                break;
            case 5:
                this.listarTodosServicos()
                break
            case 6:
                this.listarTop10PorGenero()
                break
            case 7:
                this.listarTop10MenosConsumiram()
                break
            case 8:
                break
        }
    }

    // 1 - Serviços mais consumidos por gênero
    private listarServicoGenero(): void {
        console.log(`Escolha o gênero que deseja fazer a listagem:`)
        console.log(`1 - Feminino`)
        console.log(`2 - Masculino`)
        console.log(`3 - Não Binario`)
        console.log(`4 - Não Identificado`)
        let opcaoEscolhida = this.entrada.receberNumero(`Digite a opção que deseja: `)
        let genero: string = ''
        switch (opcaoEscolhida) {
            case 1:
                genero = 'Feminino'
                break
            case 2:
                genero = 'Masculino'
                break
            case 3:
                genero = 'Não Binario'
                break
            case 4:
                genero = 'Não Identificado'
                break
            default:
                console.log(`Opção Inválida! Escolha apenas as opções disponiveis.`)
                return
        }

        const clienteGeneroEscolhido = this.clientes.filter(cliente => cliente.getGenero.getValor === genero)

        const servicosConsumido: Servico[] = []
        
        for (const cliente of clienteGeneroEscolhido) {
            servicosConsumido.push(...cliente.getServicosConsumidos)
        }
        if (servicosConsumido.length > 0) {
            const contadorServico = new Map<number, number>()
            for (const servico of servicosConsumido) {
                const servicoId = servico.getId
                contadorServico.set(servicoId, (contadorServico.get(servicoId)|| 0)+1)
            }

            const servicosOrdenados = Array.from(contadorServico.entries()).sort((a, b) => b[1] - a[1])

            // Listagem dos serviços mais consumidos por genero
            console.log(`Listagem dos serviços mais consumidos por ${genero}: `)

            servicosOrdenados.slice(0, 10).forEach((quantidadeSer, index) => {
                const [servicoId, quantidade] = quantidadeSer
                const servico = this.servicos.find(servico => servico.getId === servicoId)
                if (servico) {
                    console.log(`${index + 1}. Nome: ${servico.getNome}, Quantidade Consumida: ${quantidade}`)
                }
            })
        }
        else {
            console.log(`Não foram consumidos nenhum serviço pelo gênero ${genero}`)
        }
    }

    // 2 - 10 Clientes que mais consumiram serviços (quantidade)
    private listarTop10MaisConsumiram(): void {
        const contadorServico = new Map<Cliente, number>()
        for (const cliente of this.clientes) {
            const servicoConsumido = cliente.getServicosConsumidos
            contadorServico.set(cliente, servicoConsumido.length)
        }
        const clientesOrdenados = Array.from(contadorServico.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos 10 clientes que mais consumiram serviços (quantidade):`)
        clientesOrdenados.slice(0, 10).forEach((clienteAtual, index) => {
            const [cliente, quantidade] = clienteAtual
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Quantidade de Serviços Consumidos: ${quantidade}`)
        })
    }

    // 3 - Serviços mais consumidos (geral)
    private listarMaisConsumidos(): void {
        const contadorServico = new Map<Servico, number>()

        for (const cliente of this.clientes) {
            const servicosConsumidos = cliente.getServicosConsumidos
            for (const servico of servicosConsumidos) {
                contadorServico.set(servico, (contadorServico.get(servico) || 0) + 1)
            }
        }

        const servicosOrdenados = Array.from(contadorServico.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos serviços mais consumidos: `)

        servicosOrdenados.slice(0, 10).forEach((servicoAtual, index) => {
            const [servico, quantidade] = servicoAtual
            console.log(`${index + 1}. Serviço: ${servico.getNome}, Quantidade Consumida: ${quantidade}`)
        })
    }

    // 4 - 5 Clientes que mais consumiram em valor
    private listarTop5Valor(): void {
        const valoresClientes = new Map<Cliente, number>()
        for (const cliente of this.clientes) {
            let valorTotal = 0
            for (const servico of cliente.getServicosConsumidos) {
                valorTotal += servico.getValorDoServico
            }
            valoresClientes.set(cliente, valorTotal)
        }
        const clientesOrdenados = Array.from(valoresClientes.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Top 5 clientes que mais consumiram serviços (em valor):`)
        clientesOrdenados.slice(0, 5).forEach((clienteAtual, index) => {
            const [cliente, valorTotal] = clienteAtual;
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Valor Total Consumido: R$${valorTotal.toFixed(2)}`);
        })
    }

    // 5 - Listar todos os serviços cadastrados
    private listarTodosServicos():void{
        console.log(`-----------------------------------------------`)
        console.log(`          Todos os Serviços Cadastrados`)
        console.log(`-----------------------------------------------`)
        if (this.servicos.length > 0){
            this.servicos.forEach(servico => {
                console.log(`Id: ${servico.getId} Nome: ${servico.getNome}`)
                console.log(`Descrição: ${servico.getDescricao}`)
                console.log(`Valor: $${servico.getValorDoServico.toFixed(2)}`)
                console.log(`-----------------------------------------------`)
            })
        } else {
            console.log(`O Sistema não possui serviços cadastrados.`)
        }
    }

    // 6 - Listagem dos 10 clientes por gênero
    private listarTop10PorGenero(): void {
        const generos = ["Feminino", "Masculino", "Não Binario", "Não Identificado"];
        for (const genero of generos) {
            const clientesGenero = this.clientes.filter(c => c.getGenero.getValor === genero);
            console.log(`\nTop 10 clientes do gênero ${genero}:`);
            clientesGenero.slice(0, 10).forEach((cliente, index) => {
                console.log(`${index + 1}. Nome: ${cliente.nome}, CPF: ${cliente.getCpf.getValor}`);
            });
        }
    }

    // 7 - Listagem dos 10 clientes que menos consumiram serviços
    private listarTop10MenosConsumiram(): void {
        const contadorServico = new Map<Cliente, number>()
        for (const cliente of this.clientes) {
            const servicoConsumido = cliente.getServicosConsumidos
            contadorServico.set(cliente, servicoConsumido.length)
        }
        const clientesOrdenados = Array.from(contadorServico.entries()).sort((a, b) => a[1] - b[1])

        console.log(`Listagem dos 10 clientes que menos consumiram serviços:`)
        clientesOrdenados.slice(0, 10).forEach((clienteAtual, index) => {
            const [cliente, quantidade] = clienteAtual
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Quantidade de Serviços Consumidos: ${quantidade}`)
        })
    }}