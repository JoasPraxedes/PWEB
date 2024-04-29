function Retangulo(base,altura){
    this.base = base;
    this.altura = altura;
}

Retangulo.prototype.calcularArea = function(){
    var area = base * altura;
    return area;
}

var base = parseFloat(prompt("Insira a base do Retângulo: "));
var altura = parseFloat(prompt("Insira a altura do Retângulo"));

var retangulo = new Retangulo(base, altura);

alert(`A área do retângulo é: ${retangulo.calcularArea()}`);