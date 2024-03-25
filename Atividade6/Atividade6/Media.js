var nome, nota, nota2, nota3, media;

nome = prompt("Digite o nome do aluno: ");

nota = parseFloat(prompt("Digite a 1ª nota: "));
nota2 = parseFloat(prompt("Digite a 2ª nota: "));
nota3 = parseFloat(prompt("Digite a 3ª nota: "));

media = (nota + nota2 + nota3) / 3;

alert("Nome do aluno: " + nome + "\nA média foi: " + media);