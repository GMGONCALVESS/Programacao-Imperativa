let array = ["Feijão", "Arroz", "Carne", "Batata"]; 
let item = "Farofa";

//Acessando o elemento 3: "Carne"

console.log(array[2]);

//Adicionando item ao array

array.push(item);
console.log(array);

//Excluindo um elemento do array

array.shift();
console.log(array);
//_____________________________________________________________________________________________________________

let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

function transformaArray (array1,array2){
    array1.push(array2[0] ,array2[1], array2[2], array2[3], array2[4]);
}


transformaArray(filmes,cartoons);
filmes.pop();
console.log(filmes);