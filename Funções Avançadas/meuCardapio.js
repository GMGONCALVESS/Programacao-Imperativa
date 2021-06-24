function restaurante(a,b){
    this.restaurante = a;
    this.menu = b;
    this.saudacao = function(){
        console.log("Bem-vindo ao " + this.restaurante + ". O menu do dia é: " + this.menu)
    }
};

let local = new restaurante("DH",["batata", "carne"])

console.log(local.saudacao())