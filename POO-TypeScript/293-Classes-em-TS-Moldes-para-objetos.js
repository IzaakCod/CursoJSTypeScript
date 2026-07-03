"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Empresa = Empresa;
const empresa1 = new Empresa("Facebook");
console.log(empresa1);
