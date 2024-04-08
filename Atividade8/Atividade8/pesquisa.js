var idade,
    sexo,
    opiniao,
    i,
    somaIdade=0,
    mediaIdade=0,
    idadeMaior=0,
    idadeMenor = 150,
    qtdePessimo=0,
    qtdeOtmBom=0,
    porcOtmBom=0,
    qtdeM=0,
    qtdeF=0;

for(i = 0; i < 45; i++){
    
    idade = parseInt(prompt("Digite sua idade: "));
    sexo = prompt("Digite seu sexo:\nM - Masculino\nF - Feminino ").toUpperCase();
    opiniao = parseInt(prompt("Digite sua opnião:\n1 - Péssimo\n2 - Regular\n3 - Bom\n4 - Ótimo"));

    somaIdade += idade;

    if(idade > idadeMaior){
        idadeMaior = idade;
    }

    if(idade < idadeMenor){
        idadeMenor = idade;
    }

    if(opiniao === 1){
        qtdePessimo++;
    }

    if(opiniao === 4 || opiniao === 3){
        qtdeOtmBom++;
    }

    if(sexo == "M"){
        qtdeM++;
    }
    else if(sexo == "F"){
        qtdeF++;
    }
}

mediaIdade = somaIdade / 45;

porcOtmBom = (qtdeOtmBom / 45) * 100;

alert(`Média das idades = ${mediaIdade}\n
       Idade da pessoa mais velha = ${idadeMaior}\n
       Idade da pessoa mais nova = ${idadeMenor}\n
       Quantidade de pessoas que responderam Péssimo = ${qtdePessimo}\n
       Porcentagem das pessoas que responderam Ótimo e Bom= ${porcOtmBom}%\n
       Número de mulheres que responderam o questionário = ${qtdeF}\n
       Número de homens que responderam o questionário = ${qtdeM}\n`);
