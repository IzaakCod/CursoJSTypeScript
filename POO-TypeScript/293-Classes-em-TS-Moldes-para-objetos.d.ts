export declare class Empresa {
    readonly nome: string;
    private readonly _colaboradores;
    protected readonly cnpj: string;
    constructor(nome: string, cnpj: string);
    adicionaColaborador(colaborador: Colaborador): void;
    mostrarColaboradores(): void;
}
export declare class Colaborador {
    readonly nome: string;
    readonly sobrenome: string;
    constructor(nome: string, sobrenome: string);
}
//# sourceMappingURL=293-Classes-em-TS-Moldes-para-objetos.d.ts.map