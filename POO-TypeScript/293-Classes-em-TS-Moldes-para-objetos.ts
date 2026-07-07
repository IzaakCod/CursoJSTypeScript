export class Empresa {
    // readonly serve para dizer que o atributo não
    // pode ser alterado, só podendo ser lido!!!

    public readonly nome: string // public não necessário
    private readonly _colaboradores: Colaborador[] = []
    protected readonly cnpj: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }
    //Isso aqui é um metódo, o primeiro colaborador é o valor
    // e o segundo é o tipo dele!!!
    adicionaColaborador(colaborador: Colaborador): void {
        this._colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void {
        for (const colaborador of this._colaboradores) {
            console.log(colaborador)
        }
    }

}
// Modo simplificado 
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string) {

    }
}

const empresa1 = new Empresa("Udemy", "11.111.111/0001-11")
const colaborador1 = new Colaborador("Izaak", "Santos")
const colaborador2 = new Colaborador("Davi", "Souza")
const colaborador3 = new Colaborador("Flávia", "Lima")
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)
console.log(empresa1, empresa1.nome)
// empresa1.mostrarColaboradores()