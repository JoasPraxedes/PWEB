class Conta{
    constructor(nomeCorrentista, banco, numConta, saldo){
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    setNomeCorrentista(nome){
        this.nomeCorrentista = nome;
    }

    getNomeCorrentista(){
        return this.nomeCorrentista;
    }

    setBanco(banco){
        this.banco = banco;
    }

    getBanco(){
        return this.banco;
    }

    setNumConta(numConta){
        this.numConta = numConta;
    }

    getNumConta(){
        return this.numConta;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

    getSaldo(){
       return this.saldo;
    }
}

class ContaCorrenteSaldoEspecial extends Conta{
    constructor(nomeCorrentista, banco, numConta, saldo, limite) {
        super(nomeCorrentista, banco, numConta, saldo);
        this.limite = limite;
    }

    setLimite(limite){
        this.limite = limite;
    }

    getLimite(){
        return this.limite;
    }
}

class ContaPoupancaJuros extends Conta{
    constructor(nomeCorrentista, banco, numConta, saldo, txJuros, dtVenc){
        super(nomeCorrentista, banco, numConta, saldo);
        this.txJuros = txJuros;
        this.dtVenc = dtVenc;
    }

    setTaxaJuros(txJuros){
        this.txJuros = txJuros;
    }

    getTaxaJuros(){
        return this.txJuros;
    }

    setDataVencimento(dtVenc){
        this.dtVenc = dtVenc;
    }

    getDataVencimento(){
        return this.dtVenc;
    }
}

var nomeUsuario1 = prompt("Digite o nome do usuário da conta corrente: ");
var banco1 = prompt("Digite o nome do Banco: ");
var numConta1 = parseInt(prompt("Digite o nº da conta corrente: "));
var saldo1 = parseFloat(prompt("Digite o saldo da conta corrente: "));
var limite1 = parseFloat(prompt("Digite o limite da conta corrente com saldo especial: "));

var contaCorrente1 = new ContaCorrenteSaldoEspecial(nomeUsuario1, banco1, numConta1, saldo1, limite1);

var nomeUsuario2 = prompt("Digite o nome do usuário da conta poupança: ");
var banco2 = prompt("Digite o nome do Banco: ");
var numConta2 = parseInt(prompt("Digite o nº da conta poupança: "));
var saldo2 = parseFloat(prompt("Digite o saldo da conta poupança: "));
var txJuros2 = parseFloat(prompt("Digite a taxa de juros da conta poupança: "));
var dtVenc2 = prompt("Digite a data de vencimento: ");

var contaPoupanca1 = new ContaPoupancaJuros(nomeUsuario2, banco2, numConta2, saldo2, txJuros2, dtVenc2);

alert(`CONTA CORRENTE\n\nNome: ${contaCorrente1.getNomeCorrentista()}\nNome do Banco: ${contaCorrente1.getBanco()}
Número da Conta: ${contaCorrente1.getNumConta()}\nSaldo da Conta: ${contaCorrente1.getSaldo()}
Limite da Conta: ${contaCorrente1.getLimite()}`);

alert(`CONTA POUPANÇA\n\nNome: ${contaPoupanca1.getNomeCorrentista()}\nNome do Banco: ${contaPoupanca1.getBanco()}
Número da Conta: ${contaPoupanca1.getNumConta()}\nSaldo da Conta: ${contaPoupanca1.getSaldo()}
Taxa de Juros da Conta: ${contaPoupanca1.getTaxaJuros()}%\nData de Vencimento: ${contaPoupanca1.getDataVencimento()}`);












