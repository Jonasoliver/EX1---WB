import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente/cliente";
import Listagem from "../padrao/listagem";

export default class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  
  public listar(): void {
    console.log(`Escolha uma opção`);
    console.log(`1 - Listar Cliente Específico`);
    console.log(`2 - Listar todos os clientes por Gênero`);
    console.log(`3 - Listagem dos 10 clientes que mais consumiram produtos ou serviços (quantidade)`);
    console.log(`4 - Listagem dos 10 clientes por gênero`);
    console.log(`5 - Listagem geral dos produtos ou serviços mais consumidos`);
    console.log(`6 - Listagem dos produtos ou serviços mais consumidos por gênero`);
    console.log(`7 - Listagem dos 10 clientes que menos consumiram produtos ou serviços`);
    console.log(`8 - Listagem dos 5 clientes que mais consumiram em valor`);
    console.log(`9 - Lista de todos os clientes`);
    console.log(`10 - Voltar`);
    let opcaoEscolhida = this.entrada.receberNumero(`Digite a opção desejada: `);

    while (opcaoEscolhida < 1 || opcaoEscolhida > 10) {
      opcaoEscolhida = this.entrada.receberNumero(`Digite a opção desejada: `);
    }

    switch (opcaoEscolhida) {
      case 1:
        this.listarClienteEspecifico();
        break;
      case 2:
        this.listarPorGenero();
        break;
      case 3:
        this.listarTop10MaisConsumiram();
        break;
      case 4:
        this.listarTop10PorGenero();
        break;
      case 5:
        this.listarMaisConsumidos();
        break;
      case 6:
        this.listarMaisConsumidosPorGenero();
        break;
      case 7:
        this.listarTop10MenosConsumiram();
        break;
      case 8:
        this.listarTop5Valor();
        break;
      case 9:
        this.listarTodosClientes();
        break;
      case 10:
        break;
      default:
        console.log(`Opção inválida! Escolha somente as opções disponíveis.`);
    }
  }

  // 1 - Listar Cliente Específico
  private listarClienteEspecifico(): void {
    let encontradoCliente = false;

    while (!encontradoCliente) {
      let cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja visualizar: ");
      let clienteIndex = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpfCliente)

      if (clienteIndex >= 0) {
        encontradoCliente = true;
        const cliente = this.clientes[clienteIndex];
        console.log(`\nInformações do cliente desejado:`);
        console.log(`--------------------------------------`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome social: ${cliente.nomeSocial}`);
        console.log(`CPF: ${cliente.getCpf.getValor}`);
        console.log(`Gênero: ${cliente.getGenero.getValor}`);

        const rgs = cliente.getRgs;
        if (rgs.length > 0) {
          console.log(`Você possui ${rgs.length} RG(s):`);
          rgs.forEach((rg, index) => {console.log(` - RG(${index + 1}): ${rg.getValor}`)});
        } else {
          console.log("Você não possui nenhum RG cadastrado.");
        }

        const telefones = cliente.getTelefones;
        if (telefones.length > 0) {
          console.log(`Você possui ${telefones.length} número(s) de telefone:`);
          telefones.forEach((telefone, index) => {
            console.log(` - Telefone (${index + 1}): +${telefone.getDdd} ${telefone.getNumero}`)
          });
        } else {
          console.log("Você não possui nenhum número de telefone cadastrado.");
        }
        console.log(`--------------------------------------\n`);
      } else {
        console.log("Cliente não encontrado. Por favor, digite um CPF válido.");
      }
    }
  }

  // 2 - Listar todos os clientes por Gênero
  private listarPorGenero(): void {
    let opcaoEscolhida = 0;
    let genero: string = "";
    while (opcaoEscolhida < 1 || opcaoEscolhida > 4) {
      console.log(`Escolha o Gênero que deseja filtrar:`);
      console.log(`          1 - Feminino`);
      console.log(`          2 - Masculino`);
      console.log(`          3 - Não Binário`);
      console.log(`          4 - Não Identificado`);
      opcaoEscolhida = this.entrada.receberNumero(`Digite a opção escolhida: `)

      switch (opcaoEscolhida) {
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
          genero = "Não Identificado";
          break;
        default:
          console.log(`Opção inválida! Escolha somente as opções disponíveis.`);
      }
    }

    const clientePorGenero = this.clientes.filter(cliente => cliente.getGenero.getValor === genero)

    if (clientePorGenero.length > 0) {
      console.log(`--------------------------------------`);
      console.log(`         LISTAGEM POR GÊNERO`);
      clientePorGenero.forEach((cliente) => {
        console.log(`--------------------------------------`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome social: ${cliente.nomeSocial}`);
        console.log(`CPF: ${cliente.getCpf.getValor}`);
        const rgs = cliente.getRgs;
        if (rgs.length > 0) {
          console.log(`Você possui ${rgs.length} RG(s):`);
          rgs.forEach((rg, index) => {
            console.log(` - RG(${index + 1}): ${rg.getValor}`)
          });
        } else {
          console.log("Você não possui nenhum RG cadastrado!");
        }
        const tels = cliente.getTelefones;
        if (tels.length > 0) {
          console.log(`Você possui ${tels.length} números de Telefone`);
          tels.forEach((tel, index) => {
            console.log(` - Telefone (${index + 1}): +${tel.getDdd} ${tel.getNumero}`)
          });
        } else {
          console.log("Você não possui número de telefone cadastrado!");
        }
        console.log(`--------------------------------------`);
      });
    } else {
      console.log(`Não há clientes do gênero ${genero}.`);
    }
  }

  // 3 - Listagem dos 10 clientes que mais consumiram produtos ou serviços (quantidade)
  private listarTop10MaisConsumiram(): void {
    const contador = new Map<Cliente, number>();
    for (const cliente of this.clientes) {
      const total = (cliente.getProdutosConsumidos?.length || 0) + (cliente.getServicosConsumidos?.length || 0);
      contador.set(cliente, total);
    }
    const clientesOrdenados = Array.from(contador.entries()).sort((a, b) => b[1] - a[1]);
    console.log("Top 10 clientes que mais consumiram produtos ou serviços (quantidade):");
    clientesOrdenados.slice(0, 10).forEach(([cliente, total], index) => {
      console.log(`${index + 1}. Cliente: ${cliente.nome}, Total Consumido: ${total}`);
    });
  }

  // 4 - Listagem dos 10 clientes por gênero
  private listarTop10PorGenero(): void {
    const generos = ["Feminino", "Masculino", "Não Binário", "Não Identificado"];
    for (const genero of generos) {
      const clientesGenero = this.clientes.filter(c => c.getGenero.getValor === genero);
      console.log(`\nTop 10 clientes do gênero ${genero}:`);
      clientesGenero.slice(0, 10).forEach((cliente, index) => {
        console.log(`${index + 1}. Nome: ${cliente.nome}, CPF: ${cliente.getCpf.getValor}`);
      });
    }
  }

  // 5 - Listagem geral dos produtos ou serviços mais consumidos
  private listarMaisConsumidos(): void {
    const contador = new Map<string, number>();
    for (const cliente of this.clientes) {
      for (const produto of cliente.getProdutosConsumidos || []) {
        contador.set(produto.getNome, (contador.get(produto.getNome) || 0) + 1);
      }
      for (const servico of cliente.getServicosConsumidos || []) {
        contador.set(servico.getNome, (contador.get(servico.getNome) || 0) + 1);
      }
    }
    const ordenados = Array.from(contador.entries()).sort((a, b) => b[1] - a[1]);
    console.log("Produtos ou Serviços mais consumidos:");
    ordenados.slice(0, 10).forEach(([nome, quantidade], index) => {
      console.log(`${index + 1}. ${nome} - Quantidade: ${quantidade}`);
    });
  }

  // 6 - Listagem dos produtos ou serviços mais consumidos por gênero
  private listarMaisConsumidosPorGenero(): void {
    const generos = ["Feminino", "Masculino", "Não Binário", "Não Identificado"];
    for (const genero of generos) {
      const clientesGenero = this.clientes.filter(c => c.getGenero.getValor === genero);
      const contador = new Map<string, number>();
      for (const cliente of clientesGenero) {
        for (const produto of cliente.getProdutosConsumidos || []) {
          contador.set(produto.getNome, (contador.get(produto.getNome) || 0) + 1);
        }
        for (const servico of cliente.getServicosConsumidos || []) {
          contador.set(servico.getNome, (contador.get(servico.getNome) || 0) + 1);
        }
      }
      const ordenados = Array.from(contador.entries()).sort((a, b) => b[1] - a[1]);
      console.log(`Mais consumidos pelo gênero ${genero}:`);
      ordenados.slice(0, 10).forEach(([nome, quantidade], index) => {
        console.log(`${index + 1}. ${nome} - Quantidade: ${quantidade}`);
      });
    }
  }

  // 7 - Listagem dos 10 clientes que menos consumiram produtos ou serviços
  private listarTop10MenosConsumiram(): void {
    const contador = new Map<Cliente, number>();
    for (const cliente of this.clientes) {
      const total = (cliente.getProdutosConsumidos?.length || 0) + (cliente.getServicosConsumidos?.length || 0);
      contador.set(cliente, total);
    }
    const clientesOrdenados = Array.from(contador.entries()).sort((a, b) => a[1] - b[1]);
    console.log("Top 10 clientes que menos consumiram produtos ou serviços:");
    clientesOrdenados.slice(0, 10).forEach(([cliente, total], index) => {
      console.log(`${index + 1}. Cliente: ${cliente.nome}, Total Consumido: ${total}`);
    });
  }

  // 8 - Listagem dos 5 clientes que mais consumiram em valor
  private listarTop5Valor(): void {
    const valoresClientes = new Map<Cliente, number>();
    for (const cliente of this.clientes) {
      let valorTotal = 0;
      for (const produto of cliente.getProdutosConsumidos || []) {
        valorTotal += produto.getValorProduto;
      }
      for (const servico of cliente.getServicosConsumidos || []) {
        valorTotal += servico.getValorDoServico;
      }
      valoresClientes.set(cliente, valorTotal);
    }
    const clientesOrdenados = Array.from(valoresClientes.entries()).sort((a, b) => b[1] - a[1]);
    console.log("Top 5 clientes que mais consumiram em valor (produtos e serviços):");
    clientesOrdenados.slice(0, 5).forEach(([cliente, valorTotal], index) => {
      console.log(`${index + 1}. Cliente: ${cliente.nome}, Valor Total: R$${valorTotal.toFixed(2)}`);
    });
  }

  // 9 - Lista de todos os clientes
  private listarTodosClientes(): void {
    console.log(`--------------------------------------`)
    console.log(`    LISTAGEM DE TODOS OS CLIENTES`);
    this.clientes.forEach((cliente) => {
      console.log(`--------------------------------------`);
      console.log(`Nome: ${cliente.nome}`);
      console.log(`Nome social: ${cliente.nomeSocial}`);
      console.log(`CPF: ${cliente.getCpf.getValor}`);
      console.log(`Gênero: ${cliente.getGenero.getValor}`)
      const rgs = cliente.getRgs;
      if (rgs.length > 0) {
        console.log(`Você possui ${rgs.length} RG(s):`);
        rgs.forEach((rg, index) => {
          console.log(` - RG(${index + 1}): ${rg.getValor}`);
        });
      } else {
        console.log("Você não possui nenhum RG cadastrado.");
      }
      const tels = cliente.getTelefones;
      if (tels.length > 0) {
        console.log(`Você possui ${tels.length} números de Telefone`);
        tels.forEach((tel, index) => {
          console.log(` - Telefone (${index + 1}): +${tel.getDdd} ${tel.getNumero}`)
        });
      } else {
        console.log("Você não possui número de telefone cadastrado.");
      }
      console.log(`--------------------------------------`);
    });
  }}