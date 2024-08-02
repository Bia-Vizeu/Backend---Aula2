function calculeIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    let conta;
    var mensagem = document.querySelector("#mensagem");

    conta = peso/(altura*altura)

    if(conta < 18.5){
        mensagem.innerHTML = `Abaixo do peso`
    }else if(conta >= 18.5 && conta <= 24.9){
        mensagem.innerHTML = `Peso Normal`
    }else if(conta >= 25.00 && conta <= 29.9){
        mensagem.innerHTML = `Excesso de Peso`
    }else if(conta >= 30.0 && conta <= 34.99){
        mensagem.innerHTML = `Obesidade classe 1`
    }else if(conta >= 35.0 && conta <= 39.9){
        mensagem.innerHTML = `Obesidade classe 2`
    }else if(conta > 40.00){
        mensagem.innerHTML = `Obesidade classe 3`
    }else{
        mensagem.innerHTML = `Sistema não está funcionando`
    }
}