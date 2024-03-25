var num1, num2,soma,sub,mult,div,resto;

num1 = parseFloat(prompt("Digite a 1º número: "));
num2 = parseFloat(prompt("Digite a 2º número: "));

soma = num1 + num2;
sub = num1 - num2;
mult = num1 * num2;
div = num1 / num2;
resto = num1 % num2;

alert("Soma = " + soma + "\nSubtração = " + sub + "\nProduto = " + mult + "\nDivisão = " + div + "\nResto da divisão = " + resto);
