function DescobrirIMC(){
    var altura, peso,imc;

    altura = parseFloat(prompt('Insira sua altura: '));
    peso = parseFloat(prompt('Insira seu peso: '));

    imc = (peso/Math.pow(altura,2)).toFixed(2);
    

    if(imc < 18.5){
        alert(`IMC: ${imc}\nClassificação: Magreza \nObesidade(Grau): 0`);
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert(`IMC: ${imc}\nClassificação: Normal \nObesidade(Grau): 0`);
    }
    else if(imc >= 25 && imc <= 29.9){
        alert(`IMC: ${imc}\nClassificação: Sobrepeso \nObesidade(Grau): I`);
    }
    else if(imc >= 30 && imc <= 39.9){
        alert(`IMC: ${imc}\nClassificação: Obesidade \nObesidade(Grau): II`);
    }
    else{
        alert(`IMC: ${imc}\nClassificação: Obesidade Grave\nObesidade(Grau): III`);
    }
}

DescobrirIMC();