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
    let opcaoEscolhida = 0;
    while (opcaoEscolhida < 1 || opcaoEscolhida > 4) {
      console.log(`Escolha uma opção`);
      console.log(`1 - Listar Cliente Especifico `);
      console.log(`2 - Listar todos os clientes por Gênero`);
      console.log(`3 - Lista de todos os clientes`);
      console.log(`4 - Voltar`);

      opcaoEscolhida = this.entrada.receberNumero(`Digite a opção desejada: `);

      switch (opcaoEscolhida) {
        case 1:
          this.listarClienteEspecifico();
          break;
        case 2:
          this.listarPorGenero();
          break;
        case 3:
          this.listarTodosClientes();
          break;
        case 4:
          break;
        default:
          console.log(`Opção inválida! Escolha somente as opções disponíveis.`);
      }
    }
  }

  // lISTAGEM CLIENTE
  private listarClienteEspecifico(): void {
    let encontradoCliente = false;

    while (encontradoCliente === false) {
      let cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja visualizar: ");
      let clienteIndex = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpfCliente)

      if (clienteIndex >= 0) {
        encontradoCliente = true;
        console.log(`\nInformações do cliente desejado:`);
        console.log(`--------------------------------------`);
        console.log(`Nome: ${this.clientes[clienteIndex].nome}`);
        console.log(`Nome social: ${this.clientes[clienteIndex].nomeSocial}`);
        console.log(`CPF: ${this.clientes[clienteIndex].getCpf.getValor}`);
        console.log(`Gênero: ${this.clientes[clienteIndex].getGenero.getValor}`);

        const rgs = this.clientes[clienteIndex].getRgs;

        if (rgs.length > 0) {
          console.log(`Você possui ${rgs.length} RG(s):`);
          rgs.forEach((rg, index) => {console.log(` - RG(${index + 1}): ${rg.getValor}`)});
        } else {
          console.log("Você não possui nenhum RG cadastrado.");
        }

        const telefones = this.clientes[clienteIndex].getTelefones;

        if (telefones.length > 0) {
          console.log(`Você possui ${telefones.length} número(s) de telefone:`);
          telefones.forEach((telefone, index) => {
            console.log(` - Telefone (${index + 1}): +${telefone.getDdd} ${telefone.getNumero}`)
          });
        } else {
          console.log("Você não possui nenhum número de telefone cadastrado.");
        }
        encontradoCliente = true;

        console.log(`--------------------------------------\n`);
      } else {
        console.log("Cliente não encontrado. Por favor, digite um CPF válido.");
      }
    }
  }

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
          console.log(`Você possui ${rgs.length} Rg`);
          rgs.forEach((rg, index) => {
            console.log(` - Rg(${index + 1}): ${rg.getValor}`)
          });
        } else {
          console.log("Você não possui nenhum RG cadastrado!");
        }

        const tels = cliente.getTelefones;
        if (tels.length > 0) {
          console.log(`Você possui ${tels.length} numeros de Telefone`);
          tels.forEach((tel, index) => {
            console.log(` - Telefone (${index + 1}): +${tel.getDdd} ${tel.getNumero}`)
          });
        } else {
          console.log("Você não possui numero de telefone cadastrado!");
        }

        console.log(`--------------------------------------`);
      });
    } else {
      console.log(`Não há clientes do gênero ${genero}.`);
    }
  }
  
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
        console.log(`Você possui ${rgs.length} Rg`);
        rgs.forEach((rg, index) => {
          console.log(` - Rg(${index + 1}): ${rg.getValor}`);
        });
      } else {
        console.log("Você não possui nenhum RG cadastrado.");
      }

      const tels = cliente.getTelefones;
      if (tels.length > 0) {
        console.log(`Você possui ${tels.length} numeros de Telefone`);
        tels.forEach((tel, index) => {
          console.log(` - Telefone (${index + 1}): +${tel.getDdd} ${tel.getNumero}`)
        });
      } else {
        console.log("Você não possui numero de telefone cadastrado.");
      }

      console.log(`--------------------------------------`);
    });
  }
}
