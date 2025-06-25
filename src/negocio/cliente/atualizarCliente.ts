import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente/cliente"
import Atualizar from "../padrao/atualizar"
import Telefone from "../../modelo/cliente/telefone"
import RG from "../../modelo/cliente/rg"

export default class AtualizarCliente extends Atualizar {
  private clientes: Array<Cliente>
  private entrada: Entrada

  constructor(clientes: Array<Cliente>) {
    super()
    this.clientes = clientes
    this.entrada = new Entrada()
  }

  public atualizar(): void {
    
    let encontrarCliente = false

    while (encontrarCliente === false) { 

      let cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja atualizar: ")

      let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpfCliente)

      if (cliente) {
        console.log(`--------------------------------------`)
        console.log("  Iniciando Atualização do Cliente")
        console.log(`--------------------------------------`)

       // Muda nome
        let opcaoEscolhidaNome = 0
        while(opcaoEscolhidaNome< 1 || opcaoEscolhidaNome > 2){
          console.log("Deseja atualizar seu nome atual? ")
          console.log(`1 - Sim`)
          console.log(`2 - Não`)
          opcaoEscolhidaNome = this.entrada.receberNumero(`Digite a opção desejada: `)
          switch(opcaoEscolhidaNome){
            case 1:
              let novoNome = this.entrada.receberTexto("Digite o seu novo nome: ")
              cliente.setNome(novoNome)
              while (novoNome.trim() === '') {
                novoNome = this.entrada.receberTexto("Por favor, digite o seu novo nome corretamente: ");
                cliente.setNome(novoNome);
              }
              break
            case 2:
              console.log(`--------------------------------------`)
              console.log("         Próxima operação...")
              console.log(`--------------------------------------`)
              break
            default:
              console.log("Opção inválida. Escolha novamente.")
          }
        }
        
        // Muda nome social
        let opcaoEscolhidaNomeSocial = 0
        while(opcaoEscolhidaNomeSocial< 1 || opcaoEscolhidaNomeSocial > 2){
          console.log("Deseja atualizar o nome social? ")
          console.log(`1 - Sim`)
          console.log(`2 - Não`)
          opcaoEscolhidaNomeSocial = this.entrada.receberNumero(`Digite a opção desejada: `)
          switch(opcaoEscolhidaNomeSocial){
            case 1:
              let novoNomeSocial = this.entrada.receberTexto("Digite o seu novo nome social: ")
              cliente.setNomeSocial(novoNomeSocial)
              while(novoNomeSocial.trim() === ''){
                let novoNomeSocial = this.entrada.receberTexto("Por favor, digite o seu novo nome social corretamente: ")
                cliente.setNomeSocial(novoNomeSocial)
              }
              break
            case 2:
              console.log(`--------------------------------------`)
              console.log("         Próxima operação...")
              console.log(`--------------------------------------`)
              break
            default:
              console.log("Opção inválida. Escolha novamente.")
          }
        }

        // Gênero
        let opcaoEscolhidaGen = 0
        while (opcaoEscolhidaGen < 1 || opcaoEscolhidaGen > 2) {
          console.log("Deseja atualizar o seu Gênero? ")
          console.log(`1 - Sim`)
          console.log(`2 - Não`)

          opcaoEscolhidaGen = this.entrada.receberNumero(
            `Digite a opção desejada: `
          )
          switch(opcaoEscolhidaGen){
            case 1:
              this.modificarGenero(cliente)
            case 2:
              console.log(`--------------------------------------`)
              console.log("         Próxima operação...")
              console.log(`--------------------------------------`)
              break
            default:
              console.log("Opção inválida. Escolha novamente.")
          }
        }

        // cpf
        let opcaoEscolhidaCpf = 0
        while (opcaoEscolhidaCpf < 1 || opcaoEscolhidaCpf > 2) {
          console.log(`Deseja atualizar o CPF?`)
          console.log(`1 - Sim`)
          console.log(`2 - Não`)

          opcaoEscolhidaCpf = this.entrada.receberNumero( `Digite a opção desejada:  `)

          switch(opcaoEscolhidaCpf){
            case 1:
              this.modificarCpf(cliente)
            case 2:
              console.log(`--------------------------------------`)
              console.log("         Próxima operação...")
              console.log(`--------------------------------------`)
              break
            default:
              console.log("Opção inválida. Escolha novamente.")
          }
        }

        // RG
        let opcaoEscolhidaRg = 0
        while (opcaoEscolhidaRg < 1 || opcaoEscolhidaRg > 4) {
          console.log(`Escolha uma opção: `)
          console.log(`1 - Modificar RG existente`)
          console.log(`2 - Adicionar novo RG`)
          console.log(`3 - Apagar RG`)
          console.log(`4 - Nenhuma das opções acima! Proximo`)

          opcaoEscolhidaRg = this.entrada.receberNumero(
            `Digite a opção desejada:  `
          )
          switch(opcaoEscolhidaRg){
            case 1:
              this.modificarRg(cliente)
              break
            case 2:
              this.adicionaRg(cliente)
              break
            case 3:
              this.apagaRg(cliente)
              break
            case 4:
              console.log(`--------------------------------------`)
              console.log("         Próxima operação...")
              console.log(`--------------------------------------`)
              break
            default:
              console.log("Opção inválida. Escolha novamente.")
          }
        }

        //telefone
        let opcaoEscolhidaTel = 0
        while (opcaoEscolhidaTel < 1 || opcaoEscolhidaTel > 4) {
          console.log(`Escolha uma opção: `)
          console.log(`1 - Modificar telefone existente`)
          console.log(`2 - Adicionar novo telefone`)
          console.log(`3 - Apagar telefone`)
          console.log(`4 - Nenhuma das opções acima! Próximo`)

          opcaoEscolhidaTel = this.entrada.receberNumero(`Digite a opção desejada: `)

          switch(opcaoEscolhidaTel){
            case 1:
              this.modificaTelefone(cliente)
              break
            case 2:
              this.adicionarTelefone(cliente)
              break
            case 3:
              this.apagaTelefone(cliente)
              break
            case 4:
              console.log(`--------------------------------------`)
              console.log("         Próxima operação...")
              console.log(`--------------------------------------`)
              break
            default:
              console.log("Opção inválida. Escolha novamente.")
          }
        }

        console.log(`--------------------------------------`)
        console.log(`  Cadastro atualizado com sucesso! :)`)
        console.log(`--------------------------------------`)
        encontrarCliente = true
    } else {
        console.log("Cliente não encontrado. Tente novamente.")
      }
    }
  }

  // converte data
  private recebeData(data: string): Date {
    let partesData = data.split("/")
    let ano = new Number(partesData[2].valueOf()).valueOf()
    let mes = new Number(partesData[1].valueOf()).valueOf()
    let dia = new Number(partesData[0].valueOf()).valueOf()
    return new Date(ano, mes, dia)
  }

  // Gênero
  private modificarGenero(cliente: Cliente) : void{
    let opcaoEscolhida = 0;

    while (opcaoEscolhida < 1 || opcaoEscolhida > 4) {
        console.log(`Escolha o Gênero em que você se identifica:`);
        console.log(`1 - Feminino`);
        console.log(`2 - Masculino`);
        console.log(`3 - Não Binário`);
        console.log(`4 - Prefiro não me identificar!`);

        opcaoEscolhida = this.entrada.receberNumero(`Digite a opção escolhida: `);
        let genero: string = ''

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

        if (genero.length > 0) {
            cliente.mudarGeneroCliente(genero);
            console.log(`Gênero atualizado com sucesso para ${genero}!`)
            break
        }
    }
  }

  // CPF
  private modificarCpf(cliente: Cliente) : void{
    let novoValorCPF: string
    let verificaCpf: number 
    while (true) {
      novoValorCPF = this.entrada.receberTexto(`Por favor informe o novo número do cpf: `)
      verificaCpf = novoValorCPF.length;
      if (verificaCpf === 11) {
        break;
      } else {
        console.log("O número do CPF deve conter 11 dígitos. Por favor, tente novamente.");
      }
    }
    let novaDataCPF = this.entrada.receberTexto(`Por favor informe a nova data de emissão do cpf, no padrão dd/mm/yyyy: `)

    cliente.mudarCpfCliente(novoValorCPF, this.recebeData(novaDataCPF))
    console.log(`CPF modificado com sucesso :)`)
  }

  //RG
  private adicionaRg(cliente: Cliente): void {
    let quantRg = this.entrada.receberNumero("Digite a quantidade de RG que você deseja adicionar: ")

    for (let x = 0; x < quantRg; x++) {
      let valorRG = this.entrada.receberTexto(`Por favor, informe o número do rg: `)
      while (valorRG.trim() === ''){
        valorRG = this.entrada.receberTexto(`Por favor, informe o número do rg corretamente: `)
      }

      let dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `)
      while(dataRG.trim() === ''){
        dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `)
      }

      let rg = new RG(valorRG, this.recebeData(dataRG));
      cliente.getRgs.push(rg)
      console.log(`RG adicionado com sucesso :)`)
    }
  }

  private modificarRg(cliente: Cliente): void {
    let rgEncontrado = false

    while (rgEncontrado === false) {
      let valorRG = this.entrada.receberTexto(`Por favor, informe o número do rg que deseja modificar: `)
      let dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `)
      const clienteRgs = cliente.getRgs;
      const encontraRg = clienteRgs.find(rg => rg.getValor === valorRG && rg.getDataEmissao === this.recebeData(dataRG))

      if (encontraRg) {
        rgEncontrado = true;
        let novoValorRg = this.entrada.receberTexto(`Digite o novo valor do RG: `)
        while(novoValorRg.trim() === ''){
          novoValorRg = this.entrada.receberTexto(`Por favor, digite o novo valor do RG corretamente: `)
        }

        let novaDataRg = this.entrada.receberTexto(`Por favor, informe a nova data de emissão do rg, no padrão dd/mm/yyyy: `)
        while(novaDataRg.trim() === ''){
          novaDataRg = this.entrada.receberTexto(`Por favor, informe a nova data de emissão do rg, no padrão dd/mm/yyyy: `)
        }

        cliente.mudarRgCliente(encontraRg, novoValorRg, this.recebeData(novaDataRg))
        console.log(`RG modificado com sucesso :)`)
      } else {
        console.log(`RG não encontrado :(`)
        console.log(`Deseja tentar novamente? `)
        console.log(`1 - Sim`)
        console.log(`2 - Não`)
        const opcaoEscolhida = this.entrada.receberNumero("Digite a opção que deseja: ")
        if (opcaoEscolhida === 2) {
          break
        }
      }
    }
  }

  private apagaRg(cliente: Cliente): void {
    let rgEncontrado = false
    while (rgEncontrado === false) {

      let valorRG = this.entrada.receberTexto(`Por favor, informe o número do rg que deseja apagar: `)
      let dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `)
      const clienteRgs = cliente.getRgs
      const indexRg = clienteRgs.findIndex(rg =>rg.getValor === valorRG && rg.getDataEmissao === this.recebeData(dataRG))

      if (indexRg >= 0) {
        clienteRgs.splice(indexRg, 1)
        console.log(`RG excluido com sucesso :)`)
        rgEncontrado = true
      } else {
        console.log(`RG não encontrado :(`)
        console.log(`Deseja tentar novamente? `)
        console.log(`1 - Sim`)
        console.log(`2 - Não`)
        let opcaoEscolhida = 0
        while (opcaoEscolhida <1 || opcaoEscolhida >2){
          opcaoEscolhida = this.entrada.receberNumero("Digite a opção que deseja: ")
        }
        if (opcaoEscolhida === 2) {
          break
        }
      }
    }
  }

  // telefone
  private adicionarTelefone(cliente: Cliente): void {
    let quantTel = this.entrada.receberNumero("Digite a quantidade de Telefones que você deseja adicionar: ");

    for (let x = 0; x < quantTel; x++) {
      let telDDD = this.entrada.receberTexto("Digite o numero do DDD: ")
      while(telDDD.trim() === ''){
        telDDD = this.entrada.receberTexto("Por favor, digite o numero do DDD correto: ")
      }

      let telNumero = this.entrada.receberTexto(`Digite o numero agora: `)
      while(telNumero.trim() === ''){
        telNumero = this.entrada.receberTexto(`Por favor, digite o numero agora correto: `)
      }

      let telefone = new Telefone(telDDD, telNumero);
      cliente.getTelefones.push(telefone);
      console.log(`Telefone adicionado com sucesso :)`)
    }
  }

  private modificaTelefone(cliente: Cliente): void {
    let telefoneEncontrado = false;

    while (telefoneEncontrado === false) {
      const valorDDD = this.entrada.receberTexto("Digite o DDD do telefone que deseja modificar: ");
      const valorNumero = this.entrada.receberTexto("Digite o numero do telefone que deseja modificar: ");

      const telefonesClientes = cliente.getTelefones;
      const encontraTel = telefonesClientes.find(telefone => telefone.getDdd === valorDDD && telefone.getNumero === valorNumero);

      if (encontraTel) {
        let novoDdd = this.entrada.receberTexto("Digite o numero do DDD: ")
        while(novoDdd.trim() === ''){
          novoDdd = this.entrada.receberTexto("Digite o numero do DDD: ")
        }
        
        let novoNumero = this.entrada.receberTexto(`Digite o numero agora: `)
        while(novoNumero.trim() === ''){
          novoNumero = this.entrada.receberTexto(`Digite o numero agora: `)
        }

        cliente.mudarTelefoneCliente(encontraTel, novoDdd, novoNumero);
        console.log(`Telefone modificado com sucesso :)`)
        telefoneEncontrado = true;
      } else {
        console.log(`Telefone não encontrado :(`);
        console.log(`Deseja tentar novamente? `);
        console.log(`1 - Sim`);
        console.log(`2 - Não`);
        let opcaoEscolhida = 0
        while(opcaoEscolhida <1 || opcaoEscolhida > 2){
          opcaoEscolhida = this.entrada.receberNumero("Digite a opção que deseja: ")
        }
        if (opcaoEscolhida === 2) {
          break;
        }
      }
    }
  }

  private apagaTelefone(cliente: Cliente): void {
    let telefoneEncontrado = false;

    while (telefoneEncontrado === false) {
      const valorDDD = this.entrada.receberTexto("Digite o DDD do telefone que deseja deletar: ");
      const valorNumero = this.entrada.receberTexto("Digite o numero do telefone que deseja deletar: ");

      const telefonesCliete = cliente.getTelefones;
      const encontraIndexTel = telefonesCliete.findIndex(telefone => telefone.getDdd === valorDDD && telefone.getNumero === valorNumero);

      if (encontraIndexTel >= 0) {
        telefonesCliete.splice(encontraIndexTel, 1);
        console.log(`Telefone excluido com sucesso :)`)
        telefoneEncontrado = true;
      } else {
        console.log(`Telefone não encontrado :(`);
        console.log(`Deseja tentar novamente? `);
        console.log(`1 - Sim`);
        console.log(`2 - Não`);
        let opcaoEscolhida = 0
        while(opcaoEscolhida <1 || opcaoEscolhida > 2){
          opcaoEscolhida = this.entrada.receberNumero("Digite a opção que deseja: ")
        }
        if (opcaoEscolhida === 2) {
          break;
        }
      }
    }
  }
}
