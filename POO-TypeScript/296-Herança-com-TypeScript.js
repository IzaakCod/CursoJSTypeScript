"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.Aluno = exports.Pessoa = void 0;
class Pessoa {
    nome;
    sobrenome;
    _idade;
    cpf;
    constructor(nome, sobrenome, _idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this._idade = _idade;
        this.cpf = cpf;
    }
    getIdade() {
        return this._idade;
    }
    getCpf() {
        return this.cpf;
    }
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
class Aluno extends Pessoa {
    getNomeCompleto() {
        return "Isso vem do Aluno: " + this.nome + ' ' + this.sobrenome;
    }
}
exports.Aluno = Aluno;
class Cliente extends Pessoa {
    getNomeCompleto() {
        return "Isso vem do Cliente: " + this.nome + ' ' + this.sobrenome;
    }
}
exports.Cliente = Cliente;
const pessoa = new Aluno("Izaak", "Santos", 20, "000.256.256-64");
const aluno = new Aluno("Izaak", "Santos", 20, "000.256.256-64");
const cliente = new Cliente("Izaak", "Santos", 20, "000.256.256-64");
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
//# sourceMappingURL=296-Heran%C3%A7a-com-TypeScript.js.map