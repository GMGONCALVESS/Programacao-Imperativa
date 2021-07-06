// Crie um array de números pares, e utilizando a função .map() nesse array, crie um 
//novo array com apenas números ímpares.

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() 
//para obter apenas esses dois índices com o nome Maria.

// Crie um array de números e utilize a função .reduce() para devolver uma string 
//com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e 
//imprima a frase “O animal é NOME_DO_ANIMAL”.

let numeros = [2,4,6,8]

let impar = numeros.map(function(numero){
    return numero/2;
});

console.log(impar);

let nomes = ["Maria", "João", "Gabriel","Maria"]

let nomeIgual = nomes.filter(function(nome){
    return nome === "Maria";
});

console.log(nomeIgual)
/*
let formatados = numeros.reduce(function(elemento){
        
        console.log("-", elemento)
})

console.log(formatados) -- Nao consegui o numero 3*/

let animais = ["Cavalo", "Bode", "Iguana"]

let frase = animais.forEach(function(elemento){
    console.log("O nome do animal é: ", elemento)
})