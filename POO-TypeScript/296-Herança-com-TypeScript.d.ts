export declare class Pessoa {
    nome: string;
    sobrenome: string;
    private _idade;
    protected cpf: string;
    constructor(nome: string, sobrenome: string, _idade: number, cpf: string);
    getIdade(): number;
    getCpf(): string;
    getNomeCompleto(): string;
}
export declare class Aluno extends Pessoa {
    getNomeCompleto(): string;
}
export declare class Cliente extends Pessoa {
    getNomeCompleto(): string;
}
//# sourceMappingURL=296-Heran%C3%A7a-com-TypeScript.d.ts.map