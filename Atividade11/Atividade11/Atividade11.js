//1ª Forma
var funcionario1 = new Object();
funcionario1.matricula = "00001234";
funcionario1.nome = "Leoncio";
funcionario1.funcao = "Gerente de RH";
alert(`Matrícula:${funcionario1.matricula} \nNome:${funcionario1.nome} \nFunção:${funcionario1.funcao}`);

//2ª Forma
class Funcionario2 {
    constructor() {
        this._matricula;
        this._nome;
        this._funcao;
    }

    setMatricula(value) {
        this._matricula = value;
    }
    getMatricula() {
        return this._matricula;
    }

    setNome(value) {
        this._nome = value;
    }
    getNome() {
        return this._nome;
    }

    setFuncao(value) {
        this._funcao = value;
    }
    getFuncao() {
        return this._funcao;
    }
}
var objFuncionario = new Funcionario2();
objFuncionario.setMatricula("4321987");
objFuncionario.setNome("José da Silva");
objFuncionario.setFuncao("Auxiliar Administrativo");
alert(`Matrícula:${objFuncionario.getMatricula()} \nNome:${objFuncionario.getNome()} \nFunção:${objFuncionario.getFuncao()}`);

//3ª Forma
var funcionario3 = {};
funcionario3['matricula'] = "1235987";
funcionario3['nome'] = "Rosana Vieira";
funcionario3['funcao'] = "Secretária"
alert(`Matrícula:${funcionario3.matricula} \nNome:${funcionario3.nome} \nFunção:${funcionario3.funcao}`);
