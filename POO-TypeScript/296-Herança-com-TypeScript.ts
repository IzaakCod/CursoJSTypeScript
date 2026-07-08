export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private _idade: number,
        protected cpf: string) {
    }
    getIdade(): number {
        return this._idade
    }
    getCpf(): string {
        return this.cpf
    }
    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return "Isso vem do Aluno: " + this.nome + ' ' + this.sobrenome
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return "Isso vem do Cliente: " + this.nome + ' ' + this.sobrenome
    }
}

const pessoa = new Aluno("Izaak", "Santos", 20, "000.256.256-64")
const aluno = new Aluno("Izaak", "Santos", 20, "000.256.256-64")
const cliente = new Cliente("Izaak", "Santos", 20, "000.256.256-64")

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())