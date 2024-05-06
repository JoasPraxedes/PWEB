document.addEventListener("DOMContentLoaded",function(){
    var inputTexto = document.getElementById("idMensagem")
    var checkMaiuscula = document.getElementById("idMaiuscula")
    var checkMinuscula = document.getElementById("idMinuscula")

    checkMaiuscula.addEventListener("change", function(){
        if(this.checked){
            inputTexto.value = inputTexto.value.toUpperCase();
        }
        else{
            inputTexto.value = inputTexto.value.toLowerCase();
        }
    });

    checkMinuscula.addEventListener("change", function(){
        if(this.checked){
            inputTexto.value = inputTexto.value.toLowerCase();
        }
        else{
            inputTexto.value = inputTexto.value.toUpperCase();
        }
    });
});