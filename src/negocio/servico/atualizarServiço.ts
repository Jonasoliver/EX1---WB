import Entrada from "../../io/entrada";
import Atualizar from "../padrao/atualizar";
import Servico from "../../modelo/servico-produto/servico";

export default class AtualizaServico extends Atualizar {
  private servicos: Array<Servico>;
  private entrada: Entrada;
  constructor(servico: Array<Servico>) {
    super();
    this.servicos = servico;
    this.entrada = new Entrada();
  }
  public atualizar(): void {
    console.log(`Serviços cadastrados no sistema: `);
    if (this.servicos.length > 0) {
      this.servicos.forEach((servico) => {
        console.log(`Id: ${servico.getId} Nome: ${servico.getNome}`);
      });
    
    let encontreiServico = false;
    while (encontreiServico === false) {
      const servicoId = this.entrada.receberNumero(`Digite o ID do serviço que deseja atualizar: `);
      const servicoEscolhido = this.servicos.find((servico) => servico.getId === servicoId);
      if (servicoEscolhido) {
        let novoNomeServico = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
        while(novoNomeServico.trim() === ''){
          novoNomeServico = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
        }
        let novaDescricaoServico = this.entrada.receberTexto(`Digite a descrição do produto atualizada: `)
        while(novaDescricaoServico.trim()=== ''){
          novaDescricaoServico = this.entrada.receberTexto(`Digite a descrição do produto atualizada: `)
        }
        let novoValorServico = this.entrada.receberNumero(`Digite o novo valor do serviço: `)
        while(novoValorServico< 0){
          novoValorServico = this.entrada.receberNumero(`Digite o novo valor do serviço: `)
        }
        servicoEscolhido.setNome(novoNomeServico);
        servicoEscolhido.setDescricao(novaDescricaoServico);
        servicoEscolhido.setValorServico(novoValorServico);
        console.log(`Serviço Atualizado :)`)
        encontreiServico = true;
        break;
      } else {
        console.log(`Serviço não encontrado! Deseja tentar novamente? `);
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
    }}else{
      console.log(`O sistema não possui serviços cadastrados! :(`)
    }
  }
}
