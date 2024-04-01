while(true){
    var opcaoUser,opcaoPC;

    alert("JOKENPÔ");
    opcaoUser = parseInt(prompt("Escolha:\n1 - Papel\n2 - Tesoura\n3 - Pedra: "));

    opcaoPC = Math.floor(Math.random() * 3) + 1;

    if (opcaoUser === opcaoPC){
        alert("EMPATE!!!");
    } 
    else if ( opcaoUser === 1 && opcaoPC === 3){
        alert("Usuário escolheu: Papel\nComputador escolheu: Pedra\nVocê ganhou!!!");
    } 
    else if (opcaoUser === 2 && opcaoPC === 1){
        alert("Usuário escolheu: Tesoura\nComputador escolheu: Papel\nVocê ganhou!!!");
    } 
    else if (opcaoUser === 3 && opcaoPC === 2){
        alert("Usuário escolheu: Pedra\nComputador escolheu: Tesoura\nVocê ganhou!!!");
    } 
    else if(opcaoPC === 1 && opcaoUser === 3){    
        alert("Computador escolheu: Papel\nUsuário escolheu: Pedra\nComputador ganhou!!!");
    }
    else if(opcaoPC === 2 && opcaoUser === 1){
        alert("Computador escolheu: Tesoura\nUsuário escolheu: Papel\nComputador ganhou!!!");
    }
    else if(opcaoPC === 3 && opcaoUser === 2){
        alert("Computador escolheu: Pedra\nUsuário escolheu: Tesoura\nComputador ganhou!!!");
    }
}
