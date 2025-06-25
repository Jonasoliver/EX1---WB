import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente/cliente";
import Produto from "../../modelo/servico-produto/produto";
import Servico from "../../modelo/servico-produto/servico";
import Consumiu from "../padrao/consumo";

export default class ClienteConsumiu extends Consumiu {
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
    super();
    this.produtos = produtos
    this.servicos = servicos
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public consumo(): void {
    console.log(`Deseja registrar o consumo de um:`);
    console.log(`1 - Produto`);
    console.log(`2 - Serviço`);
    console.log(`3 - Voltar`);
    let opcaoEscolhida = this.entrada.receberNumero(
      `Digite a opção desejada: `
    );
    switch (opcaoEscolhida) {
      case 1:
        this.adquirirProduto();
        break;
      case 2:
        this.adquirirServico();
        break;
      case 3:
        break;
      default:
        console.log(`Opção inválida!`);
    }
  }

  private adquirirProduto(): void {
    if( this.produtos.length > 0 ){
      this.produtos.forEach((produto) => {
        console.log(`--------------------------------------`);
        console.log(`ID: ${produto.getId} Nome: ${produto.getNome} Valor: R$${produto.getValorProduto}`)
      });
    
    const produtoId = this.entrada.receberNumero(`Digite o ID do produto que deseja adquirir: `);
    const produto = this.produtos.find((produto) => produto.getId === produtoId);

    if (produto) {
      let encontreiCliente = false;
      while (encontreiCliente === false) {
        const clienteCPF = this.entrada.receberTexto(`Digite o CPF do cliente: `);
        const cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === clienteCPF)

        if (!cliente) {
          console.log(`Cliente não encontrado!`);
          console.log(`Deseja tentar novamente?`);
          console.log(`1 - Sim`);
          console.log(`2 - Não`);
          const opcaoEscolhida = this.entrada.receberNumero(
            "Digite a opção que deseja: "
          );
          if (opcaoEscolhida === 2) {
            break;
          }
        } else {
          cliente.getProdutosConsumidos.push(produto);
          cliente.adicionaVendaProduto
          console.log(`Cliente Encontrado :)`);
          console.log(`Processando...`);
          console.log(`Compra Registrada :)`);
          encontreiCliente = true;
        }
      }
    }}else{
      console.log(`Para registrar a compra de um produto é necessario possui produtos cadastrados.`)
    }
  }

  private adquirirServico(): void {
    if (this.servicos.length > 0) {
      this.servicos.forEach((servico) => {
        console.log(`--------------------------------------`);
        console.log(`ID: ${servico.getId} Nome: ${servico.getNome} Valor: R$${servico.getValorDoServico}`);
      });
      let servicoId = this.entrada.receberNumero(`Digite o ID do serviço que deseja adquirir: `);
      const servico = this.servicos.find((servico) => servico.getId === servicoId);
      if (servico) {
        let encontreiCliente = false;
        while (encontreiCliente === false) {
          const clienteCPF = this.entrada.receberTexto(`Digite o CPF do cliente: `);
          let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === clienteCPF);
          if (!cliente) {
            console.log(`Cliente não encontrado!`);
            console.log(`Deseja tentar novamente?`);
            console.log(`1 - Sim`);
            console.log(`2 - Não`);
            const opcaoEscolhida = this.entrada.receberNumero("Digite a opção que deseja: ");
            if (opcaoEscolhida === 2) {
              break;
            }
          } else {
            encontreiCliente = true;
            cliente.getServicosConsumidos.push(servico);
            cliente.adicionaConsumoServico
            console.log(`Cliente Encontrado :)`);
            console.log(`Processando...`);
            console.log(`Compra Registrada :)`);
          }
        }
      }
    } else {
      console.log(`Para registrar um venda de um serviço é necessario possuir serviços cadastrados.`)
    }
  }
}
