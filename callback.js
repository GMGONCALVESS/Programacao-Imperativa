let andar = () => console.log("O carro está andando!")

let parar = () => console.log("O carro parou")

function acaoCarro(funcao1, funcao2){
    funcao1();
    funcao2();
}

acaoCarro(andar, parar);