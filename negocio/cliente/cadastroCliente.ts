import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente/cliente";
import CPF from "../../modelo/cliente/cpf";
import Genero from "../../modelo/cliente/genero";
import RG from "../../modelo/cliente/rg";
import Telefone from "../../modelo/cliente/telefone";
import Cadastro from "../padrao/cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);

    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    )
    while (nome.trim() === ''){
      nome = this.entrada.receberTexto(
        `Por favor informe o nome do cliente: `
      )
    }
    let nomeSocial = this.entrada.receberTexto(
      `Por favor informe o nome social do cliente: `
    )
    while (nomeSocial.trim() === ''){
      nomeSocial = this.entrada.receberTexto(
        `Por favor informe o nome social do cliente: `
      )
    }

    // Gênero
    let opcaoEscolhida = 0;
    let genero: string = "";
    while (opcaoEscolhida < 1 || opcaoEscolhida > 4) {
      console.log(`Escolha o Gênero que você se identifica:`);
      console.log(`          1 - Feminino`);
      console.log(`          2 - Masculino`);
      console.log(`          3 - Não Binário`);
      console.log(`          4 - Prefiro não me identificar!`);

      opcaoEscolhida = this.entrada.receberNumero(`Digite a opção escolhida: `);

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

    let generoCliente = new Genero(genero);

    // cpf
    let valorCPF: string;
    let verificaCpf: number;
    while (true) {
      valorCPF = this.entrada.receberTexto(
        `Por favor, informe o número do CPF: `
      );
      verificaCpf = valorCPF.length;

      if (verificaCpf === 11) {
        break;
      } else {
        console.log(
          "O número do CPF deve conter 11 dígitos. Por favor, tente novamente."
        );
      }
    }

    let dataCPF = this.entrada.receberTexto(
      `Por favor, informe a data de emissão do CPF, no padrão dd/mm/yyyy: `
    )
    while (dataCPF.trim() ===  ''){
      dataCPF = this.entrada.receberTexto(
        `Por favor, informe a data de emissão do CPF, no padrão dd/mm/yyyy: `
      )
    }
    let cpf = new CPF(valorCPF, this.recebeData(dataCPF));

    // rg
    let cliente = new Cliente(nome, nomeSocial, cpf, generoCliente);

    let quantRg = this.entrada.receberNumero(
      "Digite a quantidade de RG que você possui: "
    );

    for (let x = 0; x < quantRg; x++) {
      let valorRG = this.entrada.receberTexto(
        `Por favor, informe o número do rg: `
      )
      while (valorRG.trim() === ''){
        valorRG = this.entrada.receberTexto(
          `Por favor, informe o número do rg corretamente: `
        )
      }

      let dataRG = this.entrada.receberTexto(
        `Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `
      )
      while(dataRG.trim() === ''){
        dataRG = this.entrada.receberTexto(
          `Por favor, informe corretamente a data de emissão do rg, no padrão dd/mm/yyyy: `
        )
      }

      let rg = new RG(valorRG, this.recebeData(dataRG));
      cliente.getRgs.push(rg);
    }

    //telefone
    let quantTel = this.entrada.receberNumero(
      "Digite a quantidade de Telefones que você possui: "
    );

    for (let x = 0; x < quantTel; x++) {
      let telDDD = this.entrada.receberTexto("Digite o DDD: ")
      while(telDDD.trim() ===  ''){
        telDDD = this.entrada.receberTexto("Por favor, digite o DDD corretamente: ")
      }

      let telNumero = this.entrada.receberTexto(`Digite o numero agora: `)
      while(telNumero.trim() === ''){
        telNumero = this.entrada.receberTexto(`Por favor, digite o numero corretamente: `)
      }

      let telefone = new Telefone(telDDD, telNumero);
      cliente.getTelefones.push(telefone);
    }

    this.clientes.push(cliente);
    console.log(`\nCadastro concluído :)\n`);
  }
  private recebeData(data: string): Date {
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();
    return new Date(ano, mes, dia);
  }
}
