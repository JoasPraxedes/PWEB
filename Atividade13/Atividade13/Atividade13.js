var imagemDiv = document.getElementById('imagem'); //vai atribuir a referência do elemento através do seu ID para a variável imagemDIV
var statusImg = document.getElementById('status'); //vai atribuir a referência do elemento através do seu ID para a variável statusImg

//addEventListener método para manipular o evento
imagemDiv.addEventListener('mouseover', function(){//mouseover é quando colocar o cursor em cima da imagem, a mensagem vai mudar
    statusImg.textContent = "Janela Aberta";// passando mensagem para o H1
});

//addEventListener método para manipular o evento
imagemDiv.addEventListener('mouseout', function(){//mouseout é quando tirar o cursor da imagem, a mensagem vai mudar
    statusImg.textContent = "Janela Fechada";// passando mensagem para o H1
});

//addEventListener método para manipular o evento
imagemDiv.addEventListener('click', function(){ //evendo click  é quando clicar na imagem, a mensagem vai mudar
    statusImg.textContent = "Janela Quebrada"; // passando mensagem para o H1
});