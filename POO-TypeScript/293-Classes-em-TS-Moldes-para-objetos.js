"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    // readonly serve para dizer que o atributo não
    // pode ser alterado, só podendo ser lido!!!
    nome; // public não necessário
    _colaboradores = [];
    cnpj;
    constructor(nome, cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    //Isso aqui é um metódo, o primeiro colaborador é o valor
    // e o segundo é o tipo dele!!!
    adicionaColaborador(colaborador) {
        this._colaboradores.push(colaborador);
    }
    mostrarColaboradores() {
        for (const colaborador of this._colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
// Modo simplificado 
class Colaborador {
    nome;
    sobrenome;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Empresa("Udemy", "11.111.111/0001-11");
const colaborador1 = new Colaborador("Izaak", "Santos");
const colaborador2 = new Colaborador("Davi", "Souza");
const colaborador3 = new Colaborador("Flávia", "Lima");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1, empresa1.nome);
// empresa1.mostrarColaboradores()
//# sourceMappingURL=293-Classes-em-TS-Moldes-para-objetos.js.map