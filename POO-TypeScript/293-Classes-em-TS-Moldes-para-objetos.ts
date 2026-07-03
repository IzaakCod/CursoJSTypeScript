export class Empresa {
    // readonly serve para dizer que o atributo não
    // pode ser alterado, só podendo ser lido fora da classe!!!
    public readonly nome: string

    constructor(nome: string) {
        this.nome = nome 
    }
}


const empresa1 = new Empresa("Facebook")
console.log(empresa1)