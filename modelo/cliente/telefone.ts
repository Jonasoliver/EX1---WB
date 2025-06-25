export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }
    
    // get
    public get getDdd(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }

    // set
    public setDdd(novoDdd: string): void{
        this.ddd = novoDdd
    }

    public setNumero(novoNumero: string): void{
        this.numero = novoNumero
    }
}