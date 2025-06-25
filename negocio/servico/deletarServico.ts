import Entrada from "../../io/entrada";
import Deletar from "../padrao/deletar";
import Servico from "../../modelo/servico-produto/servico";

export default class DeletarServico extends Deletar {
  private servicos: Array<Servico>;
  private entrada: Entrada;
  constructor(servico: Array<Servico>) {
    super();
    this.servicos = servico;
    this.entrada = new Entrada();
  }
  public deletar(): void {
    console.log(`Serviços cadastrados no sistema: `);
    if (this.servicos.length > 0) {
      this.servicos.forEach((servico) => {
        console.log(`Id: ${servico.getId} Nome: ${servico.getNome}`);
      })

    let encontreiServico = false;
    while (encontreiServico === false) {
      const servicoId = this.entrada.receberNumero(`Digite o ID do serviço que deseja deletar: `);
      const servicoIndex = this.servicos.findIndex((servico) => servico.getId === servicoId);
      if (servicoIndex >=0 ) {
        this.servicos.splice(servicoIndex, 1)
        console.log(`Serviço deletado com sucesso!`);
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
    }}
    else{
      console.log(`O sistema não possui serviços cadastrados! :(`)
    }
  }
}
