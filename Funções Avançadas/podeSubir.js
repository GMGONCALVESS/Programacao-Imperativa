let altura = 1.35;
let acompanhante = false;

function podeSubir(altura, acompanhante){
    if(altura<2 && altura >=1.4){
        return "Acesso Liberado!";
    }else if((altura<1.4 && altura>=1.2) && acompanhante==true){
        return "Acesso Permitido com Acompanhante!";
    }else{
        return "Acesso Negado!";
    }
}

let permissao = podeSubir(altura,acompanhante);

console.log(permissao);