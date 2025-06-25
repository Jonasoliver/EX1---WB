export default class Servico {
    private static idAuto: number = 1
    private id: number 
    public nome!: string
    public descricao: string
    public valorDoServico: number
    public consumo: number
    constructor(nome: string, descricao: string, valorServico: number){
        this.id = Servico.idAuto++
        this.nome = nome
        this.descricao = descricao
        this.valorDoServico = valorServico
        this.consumo = 0
    }
    public get getId(): number{
        return this.id
    }
    public get getNome(): string{
        return this.nome
    }
    public get getDescricao(): string{
        return this.descricao
    }
    public get getValorDoServico():number{
        return this.valorDoServico
    }
    public get getQuantConsumida(){
        return this.consumo
    }
    public setNome(novoNomeServico: string): void{
        this.nome = novoNomeServico
    }
    public setDescricao(novaDescricaoServico: string): void{
        this.descricao = novaDescricaoServico
    }
    public setValorServico(novoValorServico: number): void{
        this.valorDoServico = novoValorServico
    }
    public addConsumo(): void{
        this.consumo ++
    }
}