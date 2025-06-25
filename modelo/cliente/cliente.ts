import CPF from "./cpf"
import Produto from "../servico-produto/produto"
import RG from "./rg"
import Servico from "../servico-produto/servico"
import Telefone from "./telefone"
import Genero from "./genero"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private genero : Genero
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: Genero) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.genero = genero
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getGenero(): Genero{
        return this.genero
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    // mudar nome 
    public setNome(novoNome: string): void{
        this.nome = novoNome
    }
    // mudar Nome Social 
    public setNomeSocial(novoNomeSocial: string): void{
        this.nomeSocial = novoNomeSocial
    }

    // mudar Gênero
    public mudarGeneroCliente(novoGenero: string):void{
        this.genero.setGenero(novoGenero)
    }

    // mudar telefone 
    public mudarTelefoneCliente(telefone: Telefone, novoDdd: string, novoNumero: string): void{
        telefone.setDdd(novoDdd)
        telefone.setNumero(novoNumero)
    }
    // mudar cpf
    public mudarCpfCliente(novoValorCPF: string, novaDataCPF: Date): void{
        this.cpf.setValor(novoValorCPF)
        this.cpf.setDataEmissao(novaDataCPF)
    }
    // mudar RG
    public mudarRgCliente(rg: RG, novoValorRg: string, novaDataRg: Date) : void{
        rg.setValor(novoValorRg)
        rg.setDataEmissao(novaDataRg)
    }

    // adiciona venda produto 
    public adicionaVendaProduto(): void{
       this.produtosConsumidos.forEach(produto => {
        produto.addVenda()
       })
    }
    // adiciona venda servico
    public adicionaConsumoServico(): void{
        this.servicosConsumidos.forEach(servico => {
            servico.addConsumo()
        })
    }
}