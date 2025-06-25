export default class Genero{
    private genero : string
    constructor(genero: string){
        this.genero = genero
    }
    public get getValor(): string{
        return this.genero
    }
    public setGenero(novoGenero: string){
        this.genero = novoGenero
    }
}